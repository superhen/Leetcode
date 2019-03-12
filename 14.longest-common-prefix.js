/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.56%)
 * Total Accepted:    47.8K
 * Total Submissions: 151.4K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
function isAllEqual(array){
    return array.every((element, index, array) => element === array[0])
}
var longestCommonPrefix = function(strs) {
    if(!strs[0]){
        return ""
    }
    var lenarr = strs.map(item => {
        return item.length;
    })
    var minlen = Math.min.apply(null, lenarr) //得到最短字符串长度
    var resarr
    for(var i = minlen; i >= 0; i--){
        if(i === 0){
            return ""
        }
        resarr = strs.map(item => {
            return item.slice(0,i)
        })
        if(isAllEqual(resarr)){
            return resarr[0]
        }
    }
};
