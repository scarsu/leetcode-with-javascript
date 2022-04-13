/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 *
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1/description/
 *
 * algorithms
 * Medium (50.20%)
 * Likes:    491
 * Dislikes: 0
 * Total Accepted:    56.3K
 * Total Submissions: 108.9K
 * Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +
  '[[],[1],[2],[2],[],[1],[2],[]]'
 *
 * 实现RandomizedSet 类：
 * 
 * 
 * 
 * 
 * RandomizedSet() 初始化 RandomizedSet 对象
 * bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
 * bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
 * int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
 * 
 * 
 * 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove",
 * "insert", "getRandom"]
 * [[], [1], [2], [2], [], [1], [2], []]
 * 输出
 * [null, true, false, true, 2, true, false, 2]
 * 
 * 解释
 * RandomizedSet randomizedSet = new RandomizedSet();
 * randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
 * randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
 * randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
 * randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
 * randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
 * randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
 * randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * 最多调用 insert、remove 和 getRandom 函数 2 * 10^5 次
 * 在调用 getRandom 方法时，数据结构中 至少存在一个 元素。
 * 
 * 
 * 
 * 
 */

// @lc code=start
var RandomizedSet = function() {
  // 数组 获取随机元素时间复杂度是O(1)，但是删除和插入不满足O(1)
  // 哈希表 插入和删除时间复杂度是O(1)，但是获取随机元素不满足O(1)

  // 为了满足插入、删除和获取随机元素操作的时间复杂度都是 O(1)
  // 需要将变长数组和哈希表结合，
  // 变长数组中存储元素，哈希表中存储每个元素在变长数组中的下标。
  this.map=new Map() // 哈希表存储元素和索引
  this.arr=[] // 变长数组存储元素
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if(!this.map.has(val)){
      this.arr.push(val)
      this.map.set(val, this.arr.length-1)
      return true
  }else{
      return false
  }
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if(this.map.has(val)){
      let index=this.map.get(val)
      this.arr[index]=this.arr[this.arr.length-1]
      this.arr.pop()
      this.map.set(this.arr[index],index)
      this.map.delete(val)
      return true
  }else{
      return false
  }
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  if(this.arr.length===1) return this.arr[0]

  // 范围[0, arr.length-1]
  let randomIndex = Math.ceil(Math.random()*this.arr.length)-1
  return this.arr[randomIndex]
};

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/
// @lc code=end

