//1.已知原数组[2,4,6,7,9], 返回输出数组 [6,7,9] ,原数组可改变，也可新建新的数组存储
//提示：可以使用 forEach,filter,map,slice,splice 实现，请最少写出三种实现方式
//例如：
{
  let arr = [2, 4, 6, 7, 9];
  let result = [];
  arr.forEach(function (item, index) {
    if (item > 5) {
      result.push(item);
    }
  });
  return result; //记得输出结果
}

// 2. 已知原数组 [2,3,4,5],返回输出数组 [1,2,3,4,5,6]
//提示：可使用push\unshift，splice实现， 请至少写出两种实现方式

//3. 已知原数组 [1,3,4,5],返回输出数组 [5,3,1]
//提示：可使用reverse\pop

//4. 原数组 [1,4,-2,5,0,-1,3,8] ，查找数组中的-2，并返回索引值

// 5.将数组[1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5]中值为0的项去掉，返回一个不含0，且从小到大排序的新数组

// 6.现在给出两个数组：数组a：[1,7,9,11,13,15,17,19] 数组b：[2,4,6,8,10] ，请将两个数组合并为数组c并返回，请至少写出两种实现方式

//7.发散题  已知arr = [1,2,3,4,5,2,3,4]; 请将arr数组去重 （至少三种方式）
