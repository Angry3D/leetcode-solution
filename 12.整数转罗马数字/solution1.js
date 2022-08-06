const dict = [
    { label: 'M', value: 1000 }, // 0
    { label: 'CM', value: 900 }, // 1
    { label: 'D', value: 500 },
    { label: 'CD', value: 400 },
    { label: 'C', value: 100 },
    { label: 'XC', value: 90 }, // 5
    { label: 'L', value: 50 },
    { label: 'XL', value: 40 },
    { label: 'X', value: 10 },
    { label: 'IX', value: 9 }, // 9
    { label: 'V', value: 5 },
    { label: 'IV', value: 4 },
    { label: 'I', value: 1 }
]

const posDict = {
    4: 0,
    3: 1,
    2: 5,
    1: 9
}

/**
 * @param {number} num
 * @return {string}
 */
module.exports = function intToRoman(num) {
    const numLen = (num + '').length
    let i = posDict[Math.min(4, numLen)], item, step
    let result = ''
    for (; i < dict.length; ++i) {
        item = dict[i]
        step = parseInt(num / item.value)
        for (let n = 0; n < step; ++n) {
            result += item.label
        }
        num -= step * item.value
    }
    return result
}

/**
 * 直接求解法：
 * 1. 用字典保存每一个关键位的档位
 * 2. 将数字从高位关键档位向低位关键档位，逐个相除，求出除数
 * 3. 将除数逐个表示成罗马数字
 * 
 * 优化的地方：使用一个位置字典存放关键位字典的起始位置，使得每个数字可以快速开始，而减少了不必要的遍历
 */