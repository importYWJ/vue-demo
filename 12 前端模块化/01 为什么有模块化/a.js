// 匿名函数方案：在匿名函数内部定义一个对象，给对象添加暴露到外面的属性和方法，并在外面使用一个ModuleA接收
var moduleA = (function () {
  var obj = {}
  var name = '小明'
  let age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  console.log(sum(10, 20));
  var flag = false;
  obj.flag = flag;
  obj.sum = sum;
  return obj;
})()