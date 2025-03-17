对于字符串 `s` 和 `t`，只有在 `s = t + t + t + ... + t + t`（`t` 自身连接 1 次或多次）时，我们才认定 “`t` 能除尽 `s`”。

给定两个字符串 `str1` 和 `str2` 。返回 *最长字符串 `x`，要求满足 `x` 能除尽 `str1` 且 `x` 能除尽 `str2`* 。

**示例 1：**

<pre><strong>输入：</strong>str1 = "ABCABC", str2 = "ABC"
<strong>输出：</strong>"ABC"
</pre>

**示例 2：**

<pre><strong>输入：</strong>str1 = "ABABAB", str2 = "ABAB"
<strong>输出：</strong>"AB"
</pre>

**示例 3：**

<pre><strong>输入：</strong>str1 = "LEET", str2 = "CODE"
<strong>输出：</strong>""
</pre>

**提示：**

* `1 <= str1.length, str2.length <= 1000`
* `str1` 和 `str2` 由大写英文字母组成
