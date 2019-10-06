/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-05 13:39:42
 * @LastEditTime: 2019-10-05 13:39:42
 * @LastEditors: your name
 */
/**redux */
import {createStore, combineReducers} from 'redux'
import { calculate } from './calculate';

// 链接该项目所有reducer
const reducers = combineReducers({calculate})
// 全局只有一个store
export const store = createStore(reducers)