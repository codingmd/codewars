// Kata: Reversed Strings 8 kyu
// Details: Complete the solution so that it reverses the string passed into it. 
// 'world'  =>  'dlrow'
// 'word'   =>  'drow' 
// URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript

function solution(str) {
    let strArray = str.split('');
    let revStr = "";
    for (let i = strArray.length - 1; i > -1; i--) {
        revStr += strArray[i];
        };
    
        return revStr;
}

module.exports = {
    solution
}