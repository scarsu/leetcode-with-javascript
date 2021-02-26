/*
 * @lc app=leetcode.cn id=1178 lang=javascript
 *
 * [1178] 猜字谜
 *
 * https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/description/
 *
 * algorithms
 * Hard (29.41%)
 * Likes:    92
 * Dislikes: 0
 * Total Accepted:    4.6K
 * Total Submissions: 12.1K
 * Testcase Example:  '["aaaa","asas","able","ability","actt","actor","access"]\n["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]'
 *
 * 外国友人仿照中国字谜设计了一个英文版猜字谜小游戏，请你来猜猜看吧。
 * 
 * 字谜的迷面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：
 * 
 * 
 * 单词 word 中包含谜面 puzzle 的第一个字母。
 * 单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
 * 例如，如果字谜的谜面是 "abcdefg"，那么可以作为谜底的单词有 "faced", "cabbage", 和 "baggage"；而
 * "beefed"（不含字母 "a"）以及 "based"（其中的 "s" 没有出现在谜面中）。
 * 
 * 
 * 返回一个答案数组 answer，数组中的每个元素 answer[i] 是在给出的单词列表 words 中可以作为字谜迷面 puzzles[i]
 * 所对应的谜底的单词数目。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：
 * words = ["aaaa","asas","able","ability","actt","actor","access"], 
 * puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
 * 输出：[1,1,3,2,4,0]
 * 解释：
 * 1 个单词可以作为 "aboveyz" 的谜底 : "aaaa" 
 * 1 个单词可以作为 "abrodyz" 的谜底 : "aaaa"
 * 3 个单词可以作为 "abslute" 的谜底 : "aaaa", "asas", "able"
 * 2 个单词可以作为 "absoryz" 的谜底 : "aaaa", "asas"
 * 4 个单词可以作为 "actresz" 的谜底 : "aaaa", "asas", "actt", "access"
 * 没有单词可以作为 "gaswxyz" 的谜底，因为列表中的单词都不含字母 'g'。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= words.length <= 10^5
 * 4 <= words[i].length <= 50
 * 1 <= puzzles.length <= 10^4
 * puzzles[i].length == 7
 * words[i][j], puzzles[i][j] 都是小写英文字母。
 * 每个 puzzles[i] 所包含的字符都不重复。
 * 
 * 
 */

// @lc code=start
var findNumOfValidWords = function(words, puzzles) {
  // 用哈希表标识words
  const frequency = new Map();

  for (const word of words) {
    // 用一个26位二进制数 标识一个word中，26个字母是否出现
    let mask = 0;
    for (const char of word) {
      // 左移 或运算 更新二进制数
      mask |= (1 << (char.charCodeAt() - 'a'.charCodeAt()));
    }
    // 出现字母数>7，无法成为谜底，因为谜面puzzle.length固定是7
    if (CountOne(mask) <= 7) {
      frequency.set(mask, (frequency.get(mask) || 0) + 1);
    }
  }

  const ans = [];
  for (const puzzle of puzzles) {
      let total = 0;

      // 如果某个word二进制标识是puzzle的子集，那么就是谜底
      // 所以问题就变成了 从frequency哈希表的键中 枚举puzzle的子集
      let mask = 0;
      for (let i = 1; i < 7; ++i) {
        mask |= (1 << (puzzle[i].charCodeAt() - 'a'.charCodeAt()));
      }
      let subset = mask;
      while (subset) {
        let s = subset | (1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt())); // mask必须包含puzzle首字母
        if (frequency.has(s)) {
          total += frequency.get(s);  //子集个数
        }
        subset = (subset - 1) & mask;
      }
      // 在枚举子集的过程中，要么会漏掉全集 mask，要么会漏掉空集
      if (frequency.has(1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()))) {
          total += frequency.get(1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()));
      }
      ans.push(total);
  }
  return ans;
};

function CountOne(n) {
  const str = n.toString(2);
  let count = 0;
  for (const ch of str) {
    if (parseInt(ch) === 1) {
      count++;
    }
  }
  return count;
}
// @lc code=end

