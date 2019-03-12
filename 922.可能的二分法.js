/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 可能的二分法
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/description/
 *
 * algorithms
 * Easy (67.11%)
 * Total Accepted:    6.6K
 * Total Submissions: 9.9K
 * Testcase Example:  '[4,2,5,7]'
 *
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 
 * 你可以返回任何满足上述条件的数组作为答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= A.length <= 20000
 * A.length % 2 == 0
 * 0 <= A[i] <= 1000
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let even = [], odd = [];
    let resarr = []
    for(let i = 0, len = A.length; i < len; i++){
        if(A[i] % 2 === 0){
            even.push(A[i])
        }
        else{
            odd.push(A[i])
        }
    }
    let k = 0
    for(let j = 0,len = A.length; j < len; j = j+2){
        console.log(j)
        resarr[j] = even[k]
        resarr[j+1] = odd[k]
        k++;
    }
    console.log(resarr)
    return resarr;
};

