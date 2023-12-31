import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../Ui/Card"

import { useState } from "react";
function Expenseitem(props) {
    const [title, setTitle] = useState(props.title)
    const clickHandler = ()=>{
        setTitle("update");
    }
   
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button type="button" onClick={clickHandler}>Change Title</button> */}
        </Card>

    )
}
export default Expenseitem