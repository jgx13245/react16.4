  import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM,
  LIST_ITEM,
  SAGA_LIST_ITEM
} from './actionTypes'

export const handleChangeInputValueAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})

export const handleSubmitAction = () => ({
  type:ADD_ITEM_VALUE
})

export const handleDeleteAction = (index) => ({
  type:DELETE_ITEM,
  index
})
export const listItem = (data) => ({
  type:LIST_ITEM,
  data
})

export const sagaGetList = (data) => ({
  type:SAGA_LIST_ITEM,
})