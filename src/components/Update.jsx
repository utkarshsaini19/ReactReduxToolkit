import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increaseBalance,decreaseBalance } from '../store/slices/balanceSlice';

const Update = () => {
    const dispatch = useDispatch();

    let data = useSelector((state) => {
        return state.balance;
    })

    const reduceBalance = () =>{
        dispatch(decreaseBalance())
        localStorage.setItem("balance",--data);
    }

    const incBalance = () =>{
        dispatch(increaseBalance())
        localStorage.setItem("balance",++data);
        
    }

  return (
    <div style={{textAlign: "center",margin: "20px"}}>
    <div>
        <button style={{margin: "5px"}} type="button" className="btn btn-primary" onClick={()=>{reduceBalance()}}> - </button>
            Update Balance
        <button style={{margin: "5px"}} type="button" className="btn btn-success" onClick={()=>{incBalance()}}> + </button>
    </div>
    </div>
  )
}

export default Update