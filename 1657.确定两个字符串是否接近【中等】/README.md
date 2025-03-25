如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 **接近** ：

* 操作 1：交换任意两个 **现有** 字符。
  * 例如，`a<u>b</u>cd<u>e</u> -> a<u>e</u>cd<u>b</u>`
* 操作 2：将一个 **现有** 字符的每次出现转换为另一个 **现有** 字符，并对另一个字符执行相同的操作。
  * 例如，`<u>aa</u>c<u>abb</u> -> <u>bb</u>c<u>baa</u>`（所有 `a` 转化为 `b` ，而所有的 `b` 转换为 `a` ）

你可以根据需要对任意一个字符串多次使用这两种操作。

 给你两个字符串，`word1` 和 `word2` 。如果 `word1` 和 `word2`  **接近** ，就返回 `true` ；否则，返回 `false` 。

**示例 1：**

<pre><strong>输入：</strong>word1 = "abc", word2 = "bca"
<strong>输出：</strong>true
<strong>解释：</strong>2 次操作从 word1 获得 word2 。
执行操作 1："a<u>bc</u>" -> "a<u>cb</u>"
执行操作 1："<u>a</u>c<u>b</u>" -> "<u>b</u>c<u>a</u>"
</pre>

**示例 2：**

<pre><strong>输入：</strong>word1 = "a", word2 = "aa"
<strong>输出：</strong>false
<strong>解释：</strong>不管执行多少次操作，都无法从 word1 得到 word2 ，反之亦然。</pre>

**示例 3：**

<pre><strong>输入：</strong>word1 = "cabbba", word2 = "abbccc"
<strong>输出：</strong>true
<strong>解释：</strong>3 次操作从 word1 获得 word2 。
执行操作 1："ca<u>b</u>bb<u>a</u>" -> "ca<u>a</u>bb<u>b</u>"
执行操作 2："<u>c</u>aa<u>bbb</u>" -> "<u>b</u>aa<u>ccc</u>"
执行操作 2："<u>baa</u>ccc" -> "<u>abb</u>ccc"
</pre>

**提示：**

* `1 <= word1.length, word2.length <= 10<sup>5</sup>`
* `word1` 和 `word2` 仅包含小写英文字母
