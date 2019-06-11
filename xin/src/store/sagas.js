import { takeEvery, put } from 'redux-saga/effects'
import { SAGA_LIST_ITEM } from './actionTypes'
import { listItem } from './actionCreate'
import axios from 'axios'


function* sagaGetList() {
  const res = yield axios.get('https://www.easy-mock.com/mock/5bf4d27d58cc81351fa1f082/example/payIntervalCake')
  const arrData = res.data.data
  const newData = []
  arrData.map((item) => {
    newData.push(item.item)
  })  
  const action = listItem(newData)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(SAGA_LIST_ITEM, sagaGetList)
}

export default mySaga;