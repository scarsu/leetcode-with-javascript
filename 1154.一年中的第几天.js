/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 *
 * https://leetcode-cn.com/problems/day-of-the-year/description/
 *
 * algorithms
 * Easy (56.72%)
 * Likes:    61
 * Dislikes: 0
 * Total Accepted:    21.2K
 * Total Submissions: 34.9K
 * Testcase Example:  '"2019-01-09"'
 *
 * 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。请你计算并返回该日期是当年的第几天。
 * 
 * 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2
 * 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：date = "2019-01-09"
 * 输出：9
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：date = "2019-02-10"
 * 输出：41
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：date = "2003-03-01"
 * 输出：60
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：date = "2004-03-01"
 * 输出：61
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * date.length == 10
 * date[4] == date[7] == '-'，其他的 date[i] 都是数字
 * date 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const now=new Date(date).getTime()
  const firstDay=new Date(date.slice(0,4)+'-01-01').getTime()
  return (now-firstDay)/1000/60/60/24+1
};
// @lc code=end

