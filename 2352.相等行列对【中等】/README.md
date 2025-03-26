 给你一个下标从 **0** 开始、大小为 `n x n` 的整数矩阵 `grid` ，返回满足 `R<sub>i</sub>` 行和 `C<sub>j</sub>` 列相等的行列对 `(R<sub>i</sub>, C<sub>j</sub>)` 的数目*。*

 如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。

**示例 1**

![](./img/ex1.jpg)

<pre><strong>输入：</strong>grid = [[3,2,1],[1,7,6],[2,7,7]]
<strong>输出：</strong>1
<strong>解释：</strong>存在一对相等行列对：
- (第 2 行，第 1 列)：[2,7,7]
</pre>

**示例 2：**

![](./img/ex2.jpg)

<pre><strong>输入：</strong>grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
<strong>输出：</strong>3
<strong>解释：</strong>存在三对相等行列对：
- (第 0 行，第 0 列)：[3,1,2,2]
- (第 2 行, 第 2 列)：[2,4,2,2]
- (第 3 行, 第 2 列)：[2,4,2,2]
</pre>

**提示：**

* `n == grid.length == grid[i].length`
* `1 <= n <= 200`
* `1 <= grid[i][j] <= 10<sup>5</sup>`
