
var arr = [-1, 0, 8, -3, -1, 5, 5, 7];
function unique(arr) {
  var arr1 = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
console.log(unique(arr));      //  -1, 0, 8, -3, 5, 7


var arr = [1, -5, -4, 0, -4, 7, 7, 3];
function unique(arr) {
  var arr1 = [];       // 新建一个数组来存放arr中的值
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr1.indexOf(arr[i]) === -1) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
console.log(unique(arr));    // 1, -5, -4, 0, 7, 3


function unique(arr) {
  // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
  return arr.filter(function (item, index) {
    // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}





[...new Set(array)]     Array.from(new Set(array))