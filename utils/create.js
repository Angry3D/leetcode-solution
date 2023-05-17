/**
 * 快速创建 LeetCode 题目，结构如下：
 * - xx.标题
 * -- README.md
 * -- solution1.js
 * -- test.js
 *
 * 命令行格式：node utils/create 标题
 */

const [, , folderName] = process.argv

if (!folderName) {
  throw new Error('请输入新建文件夹名称')
}

const path = require('path')
const fs = require('fs')

// 创建文件夹
const folderPath = path.resolve(__dirname, '../' + folderName)
fs.mkdirSync(folderPath, {
  recursive: true
})

// 创建 README.md
fs.writeFileSync(path.resolve(folderPath, 'README.md'), '')

// 创建 solution1.js
fs.writeFileSync(path.resolve(folderPath, 'solution1.js'), '')

// 创建 test.js
fs.writeFileSync(
  path.resolve(folderPath, 'test.js'),
  `const utils = require('../utils')

const testArgs = ''

utils.test('solution1', testArgs)`
)
