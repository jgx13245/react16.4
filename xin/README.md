# react中生命周期函数的介绍

### 某一时刻，会被自动执行的函数


##### mounting部分（只在挂载的时候会被执行）

1.componentWillMount  组件页面渲染之前执行

2.componentDidMount  页面dom渲染完之后执行

##### updating部分

1. shouldComponentUpdate   数据更新之前执行，需要返回一个布尔值

2. componentWillUpdate 组件被更新之前会被执行，但是会在shouldComponentUpdate之后执行

3. componentDidUpdate   组件被更新之后会被执行，
  
4. componentWillReceiveProps  1.接受父组件传值过来的参数 2.组件第一次存在父组件中，不会被执行 3.第二次以后就会执行

##### unmoute

componentWillUnmount 将要删除dom之前的时候执行


##### 提升性能
```
// 有时是子组件不一定要一直跟着父组件改变而重新渲染，所以用这个生命周期函数来判断传值是否改变老更改。避免子组件做无用的重新渲染
  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    }else{
      return false
    }
  } 
```