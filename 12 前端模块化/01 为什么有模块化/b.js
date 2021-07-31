moduleB = (function () {
  var obj = {}
  var name = '小红'
  let age = 25

  function sum(num1, num2) {
    return num1 - num2
  }

  console.log(sum(10, 20));
  var flag = true;
  obj.flag = flag;
  obj.sum = sum;
  return obj;
})()
