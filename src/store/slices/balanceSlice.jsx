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