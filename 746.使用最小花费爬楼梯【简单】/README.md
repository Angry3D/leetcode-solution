给你一个整数数组 `cost` ，其中 `cost[i]` 是从楼梯第 `i` 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 `0` 或下标为 `1` 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。

**示例 1：**

<pre><strong>输入：</strong>cost = [10,<em><strong>15</strong></em>,20]
<strong>输出：</strong>15
<strong>解释：</strong>你将从下标为 1 的台阶开始。
- 支付 15 ，向上爬两个台阶，到达楼梯顶部。
总花费为 15 。
</pre>

**示例 2：**

<pre><strong>输入：</strong>cost = [<em><strong>1</strong></em>,100,<em><strong>1</strong></em>,1,<em><strong>1</strong></em>,100,<em><strong>1</strong></em>,<em><strong>1</strong></em>,100,<em><strong>1</strong></em>]
<strong>输出：</strong>6
<strong>解释：</strong>你将从下标为 0 的台阶开始。
- 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
- 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
- 支付 1 ，向上爬一个台阶，到达楼梯顶部。
总花费为 6 。
</pre>

**提示：**

* `2 <= cost.length <= 1000`
* `0 <= cost[i] <= 999`
