/**
 * 循环
 */
let arr  = [1,2,3,4,5];
arr.b = '100';
for (let i = 0;i<arr.length;i++){  //编程式
    console.log(arr[i]);
}

//forEach 不支持return
arr.forEach(function (item,index) {  //声明式，不关心实现方式
    console.log(item);
})

// 面试：forEach,for in,for, for of的区别
for (let key in arr){  //key会变成字符串类型，遍历出包括数组的私有属性
    console.log(key);
    console.log(typeof key);
}

for(let val of arr){  //支持return,并且是值of数组,(不能遍历对象-->arr不能改成obj)
    console.log(val);
}

//如果要强制遍历obj
let obj = {book:'js',price:'50'}; //Object.keys将对象的key作为新的数组   ['school','age']
for(let val of Object.keys(obj)){
    console.log(obj[val]);
}


/**
 *fliter
 *不直接操作原数组
 *返回过滤后的新数组
 * 回调函数如果返回true，表示这一项放到新数组中
 * 一般用于删除某个数
 */
 let newArr = [1,2,3,4,5].filter(function (item) {
    return item>2&&item<5;
});
 console.log(newArr);

/**
 *map 映射
 *不直接操作原数组
 *返回新数组
 * 回调函数中返回什么，这一项就是什么
 * 一般用于更新数组
 */
//将原有数组映射成一个新数组[1,2,3]
// <li>1</li><li>2</li><li>3</li>
let arr1 = [1,2,3].map(function (item) {
    return `<li>${item}</li>`;  //``反点是es6中的模板字符串，遇到变量用${}取值
});
console.log(arr1.join(''));

/**
 *includes find (es6)
 *some every (es5)
 */
//includes返回的是boolean
let arr2 = [1,2,3,4,55];
console.log(arr2.includes(5));
//find 返回找到的那一项，不会改变数组，回调函数中返回true表示找到了，找到后停止循环，找不到返回的是undefined
let result = arr2.find(function (item,index) { //找具体某一项用find
    console.log( item.toString().indexOf(5),111)
    return item.toString().indexOf(5)>-1
});
console.log(result);
//some 找true，找到true后停止，找不到返回false
//every 找false，找到false后停止，返回false

/**
 * reduce
 */
//reduce 收敛， 共4个参数，返回的是叠加后的结果，原数组不发生变化
//prev代表数组的第一项，next第二项
//第二次prev是undefined
let sum = [1,2,3,4,5].reduce(function (prev,next,index,item) {
    console.log(arguments);
    return prev + next; //本次的返回值，会作为下一次的prev
});
console.log(sum);

let sum2 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev,next) {
    //0+60
    //60+90
    //150+120
    return prev + next.price*next.count
},0);  //默认指定第一次的prev
console.log(sum2);

//数组扁平化：把二维数组变成一维
let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next) {
    return prev.concat(next);
});
console.log(flat);



