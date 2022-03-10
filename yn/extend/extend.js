//ES5的继承

//1. 原型链实现
// 每一个构造函数都有一个显示原型属性 指向一个原型对象， 每一个实例都有一个隐式原型 指向 构造函数的显示原型对象
//基本思想 ***** 将父类的一个实例对象作为子类的原型 ******

// 步骤1.定义父类构造函数，给父类的原型添加方法
function Parent() {
  this.name = "wo";
  this.gender = "男";
  this.list = [1, 2, 3];
}
Parent.prototype.eat = function () {
  console.log("晚餐");
};

function Child(age) {
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
//谨慎地定义方法，给原型添加方法的代码一定要放在替换原型的语句之后，不能使用对象字面量添加原型方法，这样会重写原型链（没看懂）
Child.prototype.Sleep = () => {
  console.log("睡觉");
};

let child2 = new Child(20);
child2.eat(); //继承自父类的原型 在child._proto_._proto_ 上

// 缺点1.所有的实例共享一个原型，所有实例的属性都是一样的。
// 且如果父类型的一个实例对象修改了引用类型的属性，其他所有的实例对象也会跟着修改，因为他们的原型对象都是共用的
//缺点2.创建子类型的实例时，不能向父类构造函数传参
//-------------------------------------------------------------------------------------------------------

//2. 借助构造函数（用call和apply实现）
//关键： 在子类型构造函数中通过 call调用父类型构造函数

// 步骤1 定义父类型构造函数
function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.sayHi = () => {
  console.log("say hi");
};
function Child(name, age, gender) {
  Parent.call(this, name, age);
  this.gender = gender;
}
let child3 = new Child("王", 20, "Man");
console.log("---", child3);
child3.sayHi(); // TypeError. sayHi is not a function

//优点：可以向父类构造函数传参，
// 而且解决了原型链继承中，父类属性使用this声明的引用类型属性会在所有实例共享的问题
// 缺点： 只能解决父类型上的属性和方法的继承，但是父类型原型上不能继承
//-------------------------------------------------------------------------------------------------------

//3.组合式继承（原型链+构造函数）
// 用原型链实现对原型属性和方法的继承，用构造函数实现实例属性的继承
function Parent(name) {
  this.name = name;
}
Parent.prototype.say = () => {
  console.log("say");
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
//优点：可以继承父类原型上的属性，可以传参，可复用
//每个新子类对象实例引入的构造函数属性是私有的

//缺点：两次调用父类函数， new Parent 和 Parent.call ,造成一定的性能损耗
// 在使用子类创建实例对象时，其原型中会存在两份相同 属性/方法
