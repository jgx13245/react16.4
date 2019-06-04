  import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM
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