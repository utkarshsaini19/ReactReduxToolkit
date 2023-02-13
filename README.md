# ReactReduxToolkit
Sample implementation of React Redux Toolkit for my reference

1. install @reduxjs/toolkit and react-redux

2. Create slice

import { createSlice } from '@reduxjs/toolkit'

const balanceSlice = createSlice({
    name : "balance",
    initialState : 0,
    reducers : {
        increaseBalance(state,action){
            return ++state;
        },
        decreaseBalance(state,action)
        {
            return --state;
        },
        deleteBalance(state,action){
            return 0;
        }
    }
})

console.log(balanceSlice.actions)
export default balanceSlice.reducer

export const {increaseBalance,decreaseBalance,deleteBalance} = balanceSlice.actions;

3. Create Store

import { configureStore } from '@reduxjs/toolkit'
import balanceSlice from './slices/balanceSlice'

const store = configureStore({
    reducer:{
        balance : balanceSlice
    }
})

export default store;

4 . Using useDispatch to use method from slices and useSelector to use the state/store varibles

import { useDispatch,useSelector } from 'react-redux'
const dispatch = useDispatch();
const reduceBalance = () =>{
        dispatch(decreaseBalance())
    }
let data = useSelector((state) => {
        return state.balance;
    })

5. Accessing all through Provider in index.js

import { Provider } from 'react-redux';
import store from './store/store';
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
