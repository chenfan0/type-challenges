# ThisType
- SimpleVue中用到了ThisType，ThisType的大致使用可以查看下面的代码块
```js
// ThisType 可以限定对象的函数属性的this
type TestType = {name: string; foo: () => any}
const test: TestType = {
   name: 'abc',
   foo() {
    // this 有name属性和foo属性，实际上this是test对象
   }
} 
// 使用 & 运算符
const test1: TestType & ThisType<{dummy: string}> = {
  name: 'abc',
  foo() {
    // this 上面只有dummy属性了，没有name 和 foo属性， 实际上this是ThisType内的对象，如果ThisType中传递的是1，那么这里的this就是1
    this
  },
  // 这里不能定义dummy属性， 以及其他属性
}

// 使用 ｜ 运算符
const test2: TestType | ThisType<{abc: string}> = {
  name: 'abc',
  foo() {
    // 这里的this是 ThisType内的对象
  },
  // 这里可以定义其他属性了
  a: 1,
  b: 2
}
```