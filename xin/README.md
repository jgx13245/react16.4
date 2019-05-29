# react的开始细节注意点

#### react 组件化开发和传值

1. 父组件传值子组件。属性传值

```
<div  key={index}>
  <TodoItem content={item} index={index} deleteItem={this.handleDelete.bind(this)}/>
</div>
```
子组件里面就可以直接使用传值过来的属性（名字可以自己取）,

```
<div onClick={this.handleDeleteItem}>{this.props.content}</div>
```

2. 子组件传值父组件。调用父组件的方法来传

子组件不能直接修改父组件的任何值，只能是父组件传一个方法给子组件，子组件使用这个方法，来修改父组件的数据

```
// 父组件 给子组件传了一个deleteIte的方法属性
<TodoItem content={item} index={index} deleteItem={this.handleDelete.bind(this)}/>

handleDelete(){
  // 操作
}

// 子组件 自己设置一个方法，这个方法调用父组件传过来的方法使用

<div onClick={this.handleDeleteItem}>{this.props.content}</div>

handleDeleteItem（）{
  this.props.deleteItem()...
}

```


3. react引入css样式，写class的时候，要写className