import React from "react"
import { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = (props)=>{
    
    const [iTitle , setItitle] = useState("")
    const [iDate , setIdate] = useState("")
    const [iAmout , setIamount] = useState("")
   
    const inputChangeHandler = (identifier, value) =>{
        if(identifier ==="title"){
            setItitle(value)
        }else if(identifier === "date"){
            setIdate(value)
        }else if(identifier === "amount"){
            setIamount(value)
        }
        // console.log(iTitle);
        // console.log(iDate);
        // console.log(iAmout);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expensDate = {
            title : iTitle,
            amount : iAmout,
            date : new Date(iDate)
        }
        setItitle("")
        setIdate("")
        setIamount("")
        // console.log(expensDate)
        props.dddd(expensDate)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={iTitle} onChange={(event)=>inputChangeHandler("title",event.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={iAmout} min="0.01" step="0.01" onChange={(event)=>inputChangeHandler("amount",event.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={iDate} min="2019-01-01" max="2022-12-31" onChange={(event)=>inputChangeHandler("date",event.target.value)} />
                </div>
            </div>
            <div  className="new-expense__actions"><button type="submit" >Add Expense</button></div>
        </form>
    )
}
export default ExpenseForm;