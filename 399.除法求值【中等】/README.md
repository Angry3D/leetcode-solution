给你一个变量对数组 `equations` 和一个实数值数组 `values` 作为已知条件，其中 `equations[i] = [A<sub>i</sub>, B<sub>i</sub>]` 和 `values[i]` 共同表示等式 `A<sub>i</sub> / B<sub>i</sub> = values[i]` 。每个 `A<sub>i</sub>` 或 `B<sub>i</sub>` 是一个表示单个变量的字符串。

另有一些以数组 `queries` 表示的问题，其中 `queries[j] = [C<sub>j</sub>, D<sub>j</sub>]` 表示第 `j` 个问题，请你根据已知条件找出 `C<sub>j</sub> / D<sub>j</sub> = ?` 的结果作为答案。

返回 **所有问题的答案** 。如果存在某个无法确定的答案，则用 `-1.0` 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 `-1.0` 替代这个答案。

 **注意：** 输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

 **注意：** 未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。

**示例 1：**

<pre><strong>输入：</strong>equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
<strong>输出：</strong>[6.00000,0.50000,-1.00000,1.00000,-1.00000]
<strong>解释：</strong>
条件：<em>a / b = 2.0</em>, <em>b / c = 3.0</em>
问题：<em>a / c = ?</em>, <em>b / a = ?</em>, <em>a / e = ?</em>, <em>a / a = ?</em>, <em>x / x = ?</em>
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
注意：x 是未定义的 => -1.0</pre>

**示例 2：**

<pre><strong>输入：</strong>equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
<strong>输出：</strong>[3.75000,0.40000,5.00000,0.20000]
</pre>

**示例 3：**

<pre><strong>输入：</strong>equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
<strong>输出：</strong>[0.50000,2.00000,-1.00000,-1.00000]
</pre>

**提示：**

* `1 <= equations.length <= 20`
* `equations[i].length == 2`
* `1 <= A<sub>i</sub>.length, B<sub>i</sub>.length <= 5`
* `values.length == equations.length`
* `0.0 < values[i] <= 20.0`
* `1 <= queries.length <= 20`
* `queries[i].length == 2`
* `1 <= C<sub>j</sub>.length, D<sub>j</sub>.length <= 5`
* `A<sub>i</sub>, B<sub>i</sub>, C<sub>j</sub>, D<sub>j</sub>` 由小写英文字母与数字组成
