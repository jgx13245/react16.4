import { createStore } from 'redux';
// 应该获取reducer的数据了
import reducer from './reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()  
);

export default store;