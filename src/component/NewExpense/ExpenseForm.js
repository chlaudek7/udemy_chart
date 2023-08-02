import React from "react"
import { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = ()=>{
    // const [iTitle, setItile] = useState("")
    // const [iDate, setIdate] = useState("")
    // const [iAmount, setIamount] = useState("")
    const [userInput,setUserInput] = useState({
        iTitle:"",
        iDate:"",
        iAmount:""
    })
    const titleChange = (event)=>{
        setUserInput({
            ...userInput,
            iTitle : event.target.value,
        })
    }
    const dateChange = (event)=>{
        setUserInput({
            ...userInput,
            iDate : event.target.value,
        })
    }
    const amountChange = (event)=>{
        setUserInput({
            ...userInput,
            iAmount : event.target.value,
        })
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChange} />
                </div>
            </div>
            <div  className="new-expense__actions"><button type="submit">Add Expense</button></div>
        </form>
    )
}
export default ExpenseForm;