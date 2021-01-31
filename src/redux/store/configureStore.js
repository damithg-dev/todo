import { applyMiddleware, createStore , combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import todoReducer  from '../reducers/todoReducer'

const persistConfig = {
  key: 'todo_damithg_dev',
  storage: AsyncStorage,
  whitelist:['todoReducer']
}

const rootReducer = combineReducers({
  todoReducer: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer , applyMiddleware());
const persistor = persistStore(store)

export  {store , persistor };
