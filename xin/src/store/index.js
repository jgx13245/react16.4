import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
// 应该获取reducer的数据了
import reducer from './reducer'
import todoSage from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSage)
export default store;