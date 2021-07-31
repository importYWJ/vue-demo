
var name = '小红'
var age = 25
var flag = true

function sum(num1, num2) {
  return num1 - num2
}


if(flag) {
  console.log(sum(10, 20));
}

import {name as name_a} from './a.js'

console.log(name_a);