/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 *
 * https://leetcode-cn.com/problems/design-hashset/description/
 *
 * algorithms
 * Easy (57.69%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    40.1K
 * Total Submissions: 63.1K
 * Testcase Example:  '["MyHashSet","add","add","contains","contains","add","contains","remove","contains"]\n[[],[1],[2],[1],[3],[2],[2],[2],[2]]'
 *
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
 * 
 * 实现 MyHashSet 类：
 * 
 * 
 * void add(key) 向哈希集合中插入值 key 。
 * bool contains(key) 返回哈希集合中是否存在这个值 key 。
 * void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains",
 * "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * 输出：
 * [null, null, null, true, false, null, true, null, false]
 * 
 * 解释：
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // 返回 True
 * myHashSet.contains(3); // 返回 False ，（未找到）
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // 返回 True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // 返回 False ，（已移除）
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 最多调用 10^4 次 add、remove 和 contains 。
 * 
 * 
 * 
 * 
 * 进阶：你可以不使用内建的哈希集合库解决此问题吗？
 * 
 */

// @lc code=start
var MyHashSet = function() {
  this.BASE = 769;
  // 每个哈希索引对于一个数组，可以存多个数据
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

// 哈希函数，用于将key映射到哈希值
MyHashSet.prototype.hash = function(key) {
  return key % this.BASE;
}

MyHashSet.prototype.add = function(key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
      if (element === key) {
          return; // 存在直接返回
      }
  }
  this.data[h].push(key);
};

MyHashSet.prototype.remove = function(key) {
  const h = this.hash(key);
  const it = this.data[h];
  for (let i = 0; i < it.length; ++i) {
      if (it[i] === key) {
          it.splice(i, 1);
          return;
      }
  }
};

MyHashSet.prototype.contains = function(key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
      if (element === key) {
          return true;
      }
  }
  return false;
};
// @lc code=end

