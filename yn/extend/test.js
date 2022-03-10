function Parent() {
  this.name = "wo";
  this.gender = "男";
  this.list = [1, 2, 3];
}
Parent.prototype.eat = function () {
  console.log("晚餐");
};

let child = new Parent();
let child2 = new Parent();
let child3 = new Parent();
console.log("---", child);

child2.list = [2, 3];
console.log("///", child2);
console.log("\\", child);
