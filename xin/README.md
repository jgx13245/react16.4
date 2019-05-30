# react中ref的使用

1. ref的使用
```
// 在元素上使用
<input ref={(input) => {this.input = input}} />

使用的时候就是this.input
```

2. setState是有两个参数的,第二个参数也是一个函数，是一个回调，异步完成以后在执行

```
this.setState((prevState) => {
  xxx
},() => {
  console.log(124) // 用于获取dom不及时的放这里
})
```