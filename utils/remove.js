const [, , folderName] = process.argv

if (!folderName) {
  throw new Error('请输入新建文件夹名称')
}

const fs = require('fs')
const path = require('path')

const folderPath = path.resolve(__dirname, '../' + folderName)

if (!fs.existsSync(folderPath)) {
  throw new Error('您要删除的文件夹不存在')
}

fs.rmdirSync(folderPath, {
  recursive: true
})
