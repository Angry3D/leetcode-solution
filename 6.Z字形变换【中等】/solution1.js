/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
module.exports = function convert(s, numRows) {
    const strLen = s.length
    if (numRows == 1 || numRows >= strLen) {
        return s
    }
    const grid = []
    // mode: 0-表示row自增 1-表示row自减
    let row = 0,
        col = 0,
        mode = 0

    // 构造 grid
    for (let i = 0; i < strLen; ++i) {
        console.log(row, col, s[i])
        setGridCell(grid, row, col, s[i])
        if (mode == 0 && row >= numRows - 1) {
            mode = 1
        } else if (mode == 1 && row <= 0) {
            mode = 0
        }
        if (mode == 0) {
            row = Math.min(row + 1, numRows - 1)
        } else {
            row = Math.max(row - 1, 0)
            ++col
        }
    }

    // console.log(grid)
    // 输出 grid
    let result = ''
    for (let i = 0; i < numRows; ++i) {
        if (!grid[i]) {
            continue
        }
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j]) {
                result += grid[i][j]
            }
        }
    }
    return result
}

function setGridCell(grid, row, col, val) {
    if (!grid[row]) {
        grid[row] = []
    }
    grid[row][col] = val
}

/**
 * 二维矩阵模拟
 */
