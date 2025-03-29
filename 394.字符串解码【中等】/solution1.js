/**
 * @param {string} s
 * @return {string}
 */
module.exports = function decodeString(s) {
  const regNubmer = new RegExp('[0-9]'),
    regChar = new RegExp('[a-z]');

  function getString(str) {
    // console.log('getString =>', str);
    // console.log('===========');

    if (!str.includes('[')) {
      return str;
    }

    let result = '',
      strCount = '',
      level = 0,
      startIndex = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      const c = str[i];

      if (c === '[') {
        if (level === 0) {
          startIndex = i;
        }
        level++;
      } else if (c === ']') {
        level--;
        if (level === 0) {
          const strSub = getString(str.substring(startIndex + 1, i));
          let numCount = parseInt(strCount);
          while (numCount > 0) {
            result += strSub;
            numCount--;
          }
          strCount = '';
        }
      }

      if (level === 0) {
        if (regNubmer.test(c)) {
          strCount += c;
        } else if (regChar.test(c)) {
          result += c;
        }
      }
    }

    return result;
  }

  return getString(s);
};

/**
 * 递归方式，用 level 标记当前层级，以便截取当前层级的字符串用于递归的下一次处理
 */
