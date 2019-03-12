/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (63.16%)
 * Total Accepted:    11.4K
 * Total Submissions: 18K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 * 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // // Method 1
    // return s.split('').reverse().join('').split(' ').reverse().join(' ');

    // // Method 2
    // let arr = s.split(' ');
    // arr.forEach((ele, index) => {
    //     arr[index] = ele.split('').reverse().join('');
    // });
    // res = arr.join(' ');
    // return res;

//     // Method 3
//     let arr = s.split(' ')
//     let resarr = arr.map(item => item.split('').reverse().join(''))
//     return resarr.join(' ')
