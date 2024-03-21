> [链接](https://juejin.cn/post/7058868160706904078)，项目中的注意

## 一、函数类型中的this
```typescript
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```
现在TypeScript知道createCardPicker期望在某个Deck对象上调用。 也就是说this是Deck类型的，而非any，因此--noImplicitThis不会报错了。
## 二、泛型
### 2.1 泛型接口
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```
### 2.2 泛型约束
```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});
```
可以说是继承，我们需要传入符合约束类型的值，必须包含必须的属性。
### 2.3 在泛型约束中使用类型参数
声明一个类型参数，且它被另一个类型参数所约束，并且确保这个属性存在于对象obj上。
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```
## 三、类型推论
### 3.1 上下文类型
```typescript
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};
```
这个例子会得到一个类型错误，TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。 因此，就能推断出mouseEvent参数的类型了。 如果函数表达式不是在上下文类型的位置，mouseEvent参数的类型需要指定为any，这样也不会报错了。
```typescript
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};
```
这个函数表达式有明确的参数类型注解，上下文类型被忽略。 这样的话就不报错了，因为这里不会使用到上下文类型。
## 四、.d.ts文件
### 4.1 什么是 .d.ts文件
.d.ts文件与.ts文件一样，都是用来声明变量、type、interface等，但是.d.ts文件可以在全局访问，前提是把这个文件放入tsconfig.json文件中include配置中。
.d.ts文件也一般用于第三方库变量的声明
## 五、declare
.d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。
通过declare声明的类型或者变量或者模块，在include包含的文件范围内，都可以直接引用而不用去import或者import type相应的变量或者类型。
### 5.1 declare声明一个类型
```typescript
declare type Asd {
    name: string;
}
```
在include包含的文件范围内可以直接使用Asd这个type
### 5.2 declare声明一个模块
最经典的声明模块应该是这样了
```typescript
declare module '*.css';
declare module '*.less';
declare module '*.png';
```
在编辑ts文件的时候，如果你想导入一个.css/.less/.png格式的文件，如果没有经过declare的话是会提示语法错误的
### 5.3 declare声明一个变量
这个什么情况下会用到呢？假如我在项目中引入了一个sdk，这个sdk（我们以微信的sdk为例）里面有一些全局的对象（比如wx），但是如果不经过任何的声明，在ts文件里面直接用wx.config()的话，肯定会报错。
有一句说法我蛮喜欢的：declare就是告诉TS编译器你担保这些变量和模块存在，并声明了相应类型，编译的时候不需要提示错误！
### 5.4 declare声明一个作用域
```typescript
declare namespace API {
  interface ResponseList {}
}
```
声明完之后在其他地方的ts就可以直接API.ResponseList引用到这个接口类型
### 5.5 注意

1. d.ts文件顶级声明declare最好不要跟export同级使用，不然在其他ts引用这个.d.ts的内容的时候，就需要手动import导入了
2. 在.d.ts文件里如果顶级声明不用export的话，declare和直接写type、interface效果是一样的，在其他地方都可以直接引用
```typescript
declare type Ass = {
    a: string;
}
type Bss = {
    b: string;
};
```
可以直接使用Ass和Bss作为某个变量的类型
### 5.6 兼容第三方js库
一般放在.d.ts文件中，方便其他的文件也能引入。
```typescript
declare module "test" {
  export var value: number;
  export function hello(str: string): String;
}

declare var D2: string;

declare namespace mySpace {
  interface ITest {
    id: number;
  }
}
```
这样子我们在文件中 import 那个没有支持ts的库就不会报错了，而且还会提示 库暴露出来的属性/方法
```typescript
import test from "test";

test.hello('123');
test.value;

window.D2 = "hello";

const obj: mySpace.ITest = {
  id: 1
};
```
## 六、联合类型和交叉类型
当我们使用联合类型赋值的时候，数据结构只能选择满足形如A或者形如B
当我们使用联合类型读取属性的时候，只能获取其共同的属性名 ps(idea 语法提示)。如果访问的是非共同的属性，必须做好类型保护以防止bug。
当我们使用交叉类型读取属性，可以获取所有类型的所有属性名，赋值的时候需要满足所有类型的结构。
**注意**：当我们交叉的类型中含有相同属性名但属性类型不一样的情况，该属性会成为never类型。
```typescript
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```
## 七、类型定义
### 1. 定义函数
```css
type fn = (a:number, b:number) => number
```

在函数需要指定this的时候，第一个参数就为this
```css
type fnWithThis = (this: Person, age: number) => void
type Person = {
  age: number,
  sayHi: fnWithThis
}
const fn = function () {
  console.log('age' + this.age)
}
const person:Person = {
  age: 10,
  sayHi: sayHi
}
person.sayHi('jack')
sayHi.call(person, 'jack')
```
### unknow
理解：可以定义任意类型，比如请求接口不确定类型，但是确定之后可以断言
```css
const a:unknow = 1
const b = a as number
(a as number).toFix()
b.toFix()
```
### type & interface 函数对象有属性
```css
type fn {
  (a:number, b:number): number,
  prop: string
}

interface fn {
  (a:number, b:number): number,
  prop: string
}
```
```css
const f:fn = (x, y) => {return x+y}
f.a = 'hi'
```
## 八、类型收窄

## 九、泛型
介绍：[链接](https://zhuanlan.zhihu.com/p/149767010)
泛型工具：[链接](https://juejin.cn/post/6941927727058386975)
## 十、enum
```javascript
enum Status {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}
// 获取key值
type StatusKey = keyof typeof Status; 
// 'SUCCESS' | 'DANGER' | 'WARNING'

const keyArr: StatusKey[] = ['SUCCESS', 'DANGER']; // passed
// 获取value值
type StatusVal = `${Status}`;
// 'success' | 'danger' | 'warning'

const valArr: StatusVal[] = ['success', 'danger', 'warning'];  // passed

// 获取值
Status[SUCCESS]
// 获取键
Status[success]
```
当循环报错enum的键报错时，**注音：通过值获取键只有在值为数字的时候才可以**
```javascript
<div v-for="task in Object.keys(CollectTask)">
  {{ CollectTask[task as keyof typeof CollectTask] }}：{{ item[task] }}
</div>
```
使用`task as keyof typeof CollectTask`语法
```javascript
enum Priority {
  高 = 1,
  中,
  低
}
将打印出如下
{
  '1': '高',
  '2': '中',
  '3': '低',
  '高': 1,
  '中': 2,
  '低': 3
}
```


## 十一、经验技巧
### （1）定时器用什么类型
一般可以定义为number类型，但是在使用的时候还是会报出警告，可以使用如下方式

1. 使用window.setInterval
2. Number(setInterval(()=>{// do something},1000));
### （2）Type ‘HTMLElement | null‘ is not assignable to type ‘HTMLElement‘
解决方法：

1. 禁用strict模式，tsconfig.ts，"strict": true,  ---> "strict": false
2.  严格模式下，加个判断
```javascript
let elem: HTMLElement;
const temp = document.getElementById('someid');
if (temp) {
	elem = temp;
   // ...
}
```

3. 使用类型断言(Type Assertion)，const elem : HTMLElement = document.getElementById('someid') as HTMLElement;

### 一些场景
```javascript
const arr = [1, 2];

function add(x:number, y:number){
  // ...
}

add(...arr) // 报错
```
上面示例会报错，原因是函数add()只能接受两个参数，但是传入的是...arr，TypeScript 认为转换后的参数个数是不确定的。
```javascript
const arr:[number, number] = [1, 2];

function add(x:number, y:number){
  // ...
}

add(...arr) // 正确
```
上面示例中，arr是一个拥有两个成员的元组，所以 TypeScript 能够确定...arr可以匹配函数add()的参数数量，就不会报错了。

- 多个同名的 Enum 结构会自动合并。
- expr as T
上面代码中，expr是实际的值，T是类型断言，它们必须满足下面的条件：expr是T的子类型，或者T是expr的子类型。

// a1 的类型推断为 number[]
const a1 = [1, 2, 3];

// a2 的类型推断为 readonly [1, 2, 3]
const a2 = [1, 2, 3] as const;
上面示例中，数组字面量使用as const断言后，类型推断就变成了只读元组。

function add(x:number, y:number) {
  return x + y;
}

const nums = [1, 2];
const total = add(...nums); // 报错
const nums = [1, 2] as const;
const total = add(...nums); // 正确