假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

 给你一个整数数组 `flowerbed` 表示花坛，由若干 `0` 和 `1` 组成，其中 `0` 表示没种植花，`1` 表示种植了花。另有一个数 `n` ，能否在不打破种植规则的情况下种入 `n` 朵花？能则返回 `true` ，不能则返回 `false` 。

**示例 1：**

<pre><strong>输入：</strong>flowerbed = [1,0,0,0,1], n = 1
<strong>输出：</strong>true
</pre>

**示例 2：**

<pre><strong>输入：</strong>flowerbed = [1,0,0,0,1], n = 2
<strong>输出：</strong>false
</pre>

**提示：**

* `1 <= flowerbed.length <= 2 * 10<sup>4</sup>`
* `flowerbed[i]` 为 `0` 或 `1`
* `flowerbed` 中不存在相邻的两朵花
* `0 <= n <= flowerbed.length`
