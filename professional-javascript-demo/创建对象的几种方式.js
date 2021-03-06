/**
 * 工厂模式创建对象，缺点：无法判别实例类型
 * @param  {[type]} name     [description]
 * @param  {[type]} age      [description]
 * @param  {[type]} sex      [description]
 * @param  {[type]} sayHello [description]
 * @return {[type]}          [description]
 */
function people(name, age, sex){
	var person = new Object();
	person.name = name;
	person.age = age;
	person.sex = sex;
	person.sayName = function(){
		alert(person.name);
	};
	return person;
}

/**
 * 构造函数创建对象，缺点：重复创建共享方法
 * @param {[type]} name     [description]
 * @param {[type]} age      [description]
 * @param {[type]} sex      [description]
 * @param {[type]} sayHello [description]
 */
function People(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.sayName = function(){
		alert(this.name);
	};
}

/**
 * 原型对象创建，缺点：1、所有实例具有相同的属性；2、具有实例修改引用类型属性影响其他实例的风险
 * @param {[type]} name [description]
 * @param {[type]} age  [description]
 * @param {[type]} sex  [description]
 */
function People(){}
People.prototype = {
	constructor : People,
	name : 'yangshuo',
	age : 24,
	sex : 'male',
	hobby : ['basketball', 'football', 'pingpang'],
	sayName : function(){
		alert(this.name);
	}
};

/**
 * 组合使用构造函数和原型模式创建对象，最为稳妥
 * @param {[type]} name [description]
 * @param {[type]} sex  [description]
 * @param {[type]} age  [description]
 */
function People(name, sex, age){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.hobby = ['basketball', 'football', 'pingpang'];
}

People.prototype = {
	constructor : People,
	sayName : function () {
		alert(this.name);
	}
};

/**
 * 动态原型模式创建对象
 * @param {[type]} name     [description]
 * @param {[type]} age.     sex           [description]
 * @param {[type]} sayName [description]
 */
function People(name, age. sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	if(typeof sayName !== 'function'){
		People.prototype.sayName = function (){
			alert(this.name);
		};
	}
}

/**
 * 寄生模型创建对象，缺点：同工厂模式一样，无法使用instanceOf判断实例类型，优点：书写代码更优雅
 * @param {[type]} name     [description]
 * @param {[type]} age      [description]
 * @param {[type]} sex      [description]
 * @param {[type]} sayHello [description]
 */
function People(name, age, sex){
	var Person = new Object();
	Person.name = name;
	Person.age = age;
	Person.sex = sex;
	Person.sayName = function(){
		alert(this.name);
	};
	return Person;
}

function specialArray(){
	var sArray = new Array();
	sArray.push.apply(sArray, arguments);
	sArray.toPipedString = function (){
		return this.join('|');
	};
}