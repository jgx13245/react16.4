# propsTypes和defaultProps 应用

1.有时候父组件传值给子组件的时候，有函数，变量，等等。子组件接受的类型不能乱传。是固定的，需要检验一下

```
// 写在父组件的地方

// 对传给子组件的数据进行强校验。要不然报错
TodoItem.propTypes = {
  test:PropTypes.string.isRequired,
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number
}
// 上面的test 父组件没有传值给子组件，但是isRequired要求必须传，这个时候defaultTypes就是默认给它一个值
TodoItem.defaultTypes = {
  test:'hello world'
}

```