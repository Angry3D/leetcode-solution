泰波那契序列 T~n~ 定义如下：

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 `n`，请返回第 n 个泰波那契数 T~n ~的值。

**示例 1：**

<pre><strong>输入：</strong>n = 4
<strong>输出：</strong>4
<strong>解释：</strong>
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
</pre>

**示例 2：**

<pre><strong>输入：</strong>n = 25
<strong>输出：</strong>1389537
</pre>

**提示：**

* `0 <= n <= 37`
* 答案保证是一个 32 位整数，即 `answer <= 2^31 - 1`。
