import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM,
  LIST_ITEM
} from './actionTypes'

const defaultState = {
  inputValue:'',
  inputList:[]
}

// reducer不能直接修改state的值
export default (state = defaultState,action) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_ITEM_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList.splice(action.index,1)
    return newState
  }
  // 获取列表数据
  if(action.type === LIST_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputList = action.data
    return newState
  }
  return state
}