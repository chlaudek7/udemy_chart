import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props)=>{
    const exFormData = (exFormUP) =>{
        console.log(exFormUP) // 폼에서 올라온 데이터
        const expenseData = {
            ...exFormUP,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData) // 상위 부도한테 받은 함수
        // console.log(expenseData)
    }
    return (
        <div className="new-expense">
            {<ExpenseForm dddd={exFormData}/>}
        </div>
    )
};
export default NewExpense