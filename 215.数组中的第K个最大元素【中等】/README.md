给定整数数组 `nums` 和整数 `k`，请返回数组中第 `<strong>k</strong>` 个最大的元素。

请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。

你必须设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

**示例 1:**

<pre><strong>输入:</strong> <code>[3,2,1,5,6,4],</code> k = 2
<strong>输出:</strong> 5
</pre>

**示例 2:**

<pre><strong>输入:</strong> <code>[3,2,3,1,2,4,5,5,6], </code>k = 4
<strong>输出:</strong> 4</pre>

**提示：**

* `1 <= k <= nums.length <= 10<sup>5</sup>`
* `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`
