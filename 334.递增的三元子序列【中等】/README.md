给你一个整数数组 `nums` ，判断这个数组中是否存在长度为 `3` 的递增子序列。

如果存在这样的三元组下标 `(i, j, k)` 且满足 `i < j < k` ，使得 `nums[i] < nums[j] < nums[k]` ，返回 `true` ；否则，返回 `false` 。

**示例 1：**

<pre><strong>输入：</strong>nums = [1,2,3,4,5]
<strong>输出：</strong>true
<strong>解释：</strong>任何 i < j < k 的三元组都满足题意
</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [5,4,3,2,1]
<strong>输出：</strong>false
<strong>解释：</strong>不存在满足题意的三元组</pre>

**示例 3：**

<pre><strong>输入：</strong>nums = [2,1,5,0,4,6]
<strong>输出：</strong>true
<strong>解释：</strong>三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
</pre>


**提示：**

* `1 <= nums.length <= 5 * 10<sup>5</sup>`
* `-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1`


**进阶：** 你能实现时间复杂度为 `O(n)` ，空间复杂度为 `O(1)` 的解决方案吗？
