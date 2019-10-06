/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-05 13:39:42
 * @LastEditTime: 2019-10-05 13:39:42
 * @LastEditors: your name
 */
export const INCREMENT = "INCREMENT"
export const REDUCE = "REDUCE"

export const incrementAction = {type: INCREMENT, count: 1}
export const reduceAction = {type: REDUCE, count: 1}

interface ReduxState {
    num: number
}

interface Action {
    type: string,
    count:  number,
}

const initData = {
    num: 0
}

const calculate = (state: ReduxState = initData, action: Action ) => {
    switch (action.type) {
        case INCREMENT:
            return {num: state.num + action.count}
        case REDUCE:
            return {num: state.num - action.count}
        default:
            return state
    }
}

export {calculate}