给你一棵根为 `root` 的二叉树，请你返回二叉树中好节点的数目。

「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。


**示例 1：**

![1743863142353](image/README/1743863142353.png)

<pre><strong>输入：</strong>root = [3,1,4,3,null,1,5]
<strong>输出：</strong>4
<strong>解释：</strong>图中蓝色节点为好节点。
根节点 (3) 永远是个好节点。
节点 4 -> (3,4) 是路径中的最大值。
节点 5 -> (3,4,5) 是路径中的最大值。
节点 3 -> (3,1,3) 是路径中的最大值。</pre>


**示例 2：**

![1743863155071](image/README/1743863155071.png)

<pre><strong>输入：</strong>root = [3,3,null,4,2]
<strong>输出：</strong>3
<strong>解释：</strong>节点 2 -> (3, 3, 2) 不是好节点，因为 "3" 比它大。</pre>


**示例 3：**

<pre><strong>输入：</strong>root = [1]
<strong>输出：</strong>1
<strong>解释：</strong>根节点是好节点。</pre>


**提示：**

* 二叉树中节点数目范围是 `[1, 10^5]` 。
* 每个节点权值的范围是 `[-10^4, 10^4]` 。
