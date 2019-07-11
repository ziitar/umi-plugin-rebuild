// ref:
// - https://umijs.org/plugin/develop.html

import fs from 'fs';
import path from 'path';
import Async from 'async'

function deepReadDir(directoryOrFileName) {
  try {
    let arr = [];
    const files = fs.readdirSync(directoryOrFileName, {withFileTypes: true});
    files.forEach(item => {
      if (item.isDirectory()) {
        arr.push({
          type: 'directory',
          name: directoryOrFileName + path.sep + item.name
        })
        arr = arr.concat(deepReadDir(directoryOrFileName + path.sep + item.name))
      } else if (item.isFile()) {
        arr.push({
          type: 'file',
          name: directoryOrFileName + path.sep + item.name,
        })
      }
    })
    return arr;
  } catch (e) {
    console.error(e)
    return []
  }
}

function copyFile(arr, source, output) {
  Async.each(arr, (item, callback) => {
    if (item.type === 'directory') {
      if (!fs.existsSync(item.name.replace(source, output))) {
        fs.mkdir(item.name.replace(source, output), (err) => {
          if (err) {
            callback(err)
          } else {
            callback(null)
          }
        })
      } else {
        callback(null)
      }
    } else {
      callback(null)
    }
  }, (err) => {
    if (err) {
      console.error(err)
    } else {
      arr.forEach(item => {
        if (item.type === 'file') {
          fs.copyFileSync(item.name, item.name.replace(source, output))
          console.log(item.name + '复制完成')
        }
      })
    }
  })
}

export default function (api, options) {
  const {outputPath, onBuildSuccess} = api.paths;
  const {source, output} = Object.assign({
    source: 'dist',
    output: '_dist'
  }, options);
  onBuildSuccess(() => {
    const arr = deepReadDir(path.normalize(outputPath));
    if (fs.existsSync(output)) {
      copyFile(arr, source, output)
    } else {
      fs.mkdir(output, (err) => {
        if (err) {
          console.error(err)
        } else {
          copyFile(arr, source, output)
        }
      })
    }
  })
}
