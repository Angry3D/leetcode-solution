给定一个长度为 `n` 的整数数组  `height` 。有  `n`  条垂线，第 `i` 条线的两个端点是  `(i, 0)`  和  `(i, height[i])` 。

找出其中的两条线，使得它们与  `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：** 你不能倾斜容器。


**示例 1：**

![img](./img/question_11.jpeg)

<pre><strong>输入：</strong>[1,8,6,2,5,4,8,3,7]
<strong>输出：</strong>49 
<strong>解释：</strong>图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。</pre>

**示例 2：**

<pre><strong>输入：</strong>height = [1,1]
<strong>输出：</strong>1</pre>

**提示：**

* `n == height.length`
* `2 <= n <= 10<sup>5</sup>`
* `0 <= height[i] <= 10<sup>4</sup>`
