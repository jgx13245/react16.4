// reducer是个纯函数。接受两个参数，state和组件dispatch传过来的action
const defaultState = {
  inputValue:'',
  inputList:[]
}

export default (state = defaultState ,action) => {
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'add_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.splice(action.value,1)
    return newState
  }
  return state
}