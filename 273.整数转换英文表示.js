/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 *
 * https://leetcode-cn.com/problems/integer-to-english-words/description/
 *
 * algorithms
 * Hard (30.92%)
 * Likes:    182
 * Dislikes: 0
 * Total Accepted:    15.7K
 * Total Submissions: 45.8K
 * Testcase Example:  '123'
 *
 * 将非负整数 num 转换为其对应的英文表示。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num = 123
 * 输出："One Hundred Twenty Three"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num = 12345
 * 输出："Twelve Thousand Three Hundred Forty Five"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：num = 1234567
 * 输出："One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：num = 1234567891
 * 输出："One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven
 * Thousand Eight Hundred Ninety One"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if(num===0) return 'Zero'

  // 获取0-999数字的英文
  const getHundredStr=num=>{
      if(num===0) return ''

      const numberMap=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
      const tenMap=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
      //123
      const ret=[]
      const hun=(num/100)|0
      const ten=((num%100)/10)|0
      const ge=num%10
      if(hun>0){
          ret.push(numberMap[hun] + ' Hundred')
      }
      if(ten>1){
          ret.push(tenMap[ten])
          if(ge>0) ret.push(numberMap[ge])
      }else if(ten===1){
          // 10-19
          ret.push(numberMap[ten*10+ge])
      }else if(ge>0){
          ret.push(numberMap[ge])
      }
      return ret.join(' ')
  }

  const ret=[]
  // num 的最大值为 2^31−1=2(billion),147(million),483(thousand),647
  const base=['','Thousand','Million','Billion']
  let i=0
  // 每三位迭代一次
  while(num>0){
      const cur=getHundredStr(num%1000)
      if(cur) ret.unshift(cur + (base[i]&&cur?' '+base[i]:''))
      num=(num/1000)|0
      i++
  }
  return ret.join(' ')
};
// @lc code=end

