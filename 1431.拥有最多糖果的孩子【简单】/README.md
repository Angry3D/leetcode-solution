有 `n` 个有糖果的孩子。给你一个数组 `candies`，其中 `candies[i]` 代表第 `i` 个孩子拥有的糖果数目，和一个整数 `extraCandies` 表示你所有的额外糖果的数量。

返回一个长度为 `n` 的布尔数组 `result`，如果把所有的 `extraCandies` 给第 `i` 个孩子之后，他会拥有所有孩子中 **最多 **的糖果，那么 `result[i]` 为 `true`，否则为 `false`。

注意，允许有多个孩子同时拥有 **最多** 的糖果数目。

**示例 1：**

<pre><strong>输入：</strong>candies = [2,3,5,1,3], extraCandies = 3
<strong>输出：</strong>[true,true,true,false,true] 
<strong>解释：</strong>如果你把额外的糖果全部给：
孩子 1，将有 2 + 3 = 5 个糖果，是孩子中最多的。
孩子 2，将有 3 + 3 = 6 个糖果，是孩子中最多的。
孩子 3，将有 5 + 3 = 8 个糖果，是孩子中最多的。
孩子 4，将有 1 + 3 = 4 个糖果，不是孩子中最多的。
孩子 5，将有 3 + 3 = 6 个糖果，是孩子中最多的。</pre>

**示例 2：**

<pre><strong>输入：</strong>candies = [4,2,1,1,2], extraCandies = 1
<strong>输出：</strong>[true,false,false,false,false] 
<strong>解释：</strong>只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。
</pre>

**示例 3：**

<pre><strong>输入：</strong>candies = [12,1,12], extraCandies = 10
<strong>输出：</strong>[true,false,true]
</pre>

**提示：**

* `n == candies.length`
* `2 <= n <= 100`
* `1 <= candies[i] <= 100`
* `1 <= extraCandies <= 50`
