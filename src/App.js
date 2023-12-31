import Exp from "./component/Expenses/Expenseitem";
import NewExpense from "./component/NewExpense/NewExpense";
import Filter from "./component/Filter/Fiter";
import { useEffect, useState } from 'react';

function App() {
  let expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [exDate,setExDate] = useState([])
  const [Dmonth,setMonth] = useState()
  const addExp = expense => {
    console.log("ddd");
    console.log(expense)
  }
  const chlidChangeMonth = month =>{
    setMonth(month)
    const sortArray = expenses.filter(exArr => exArr.date.getFullYear() == month);
    expenses = sortArray
    console.log(sortArray)
  }
  
  useEffect(() => {
  }, []);
  return (
    <div>
      <NewExpense onAddExpense={addExp}/>

      <div className="expenItem">
      <Filter data={expenses} onChangeMonth={chlidChangeMonth}/>

        {
          expenses.map((propArr)=>{
           return  <Exp key={propArr.id} title={propArr.title} amount={propArr.amount} date={propArr.date}></Exp>
          })
        }
        
      </div>
    </div>
  );
}

export default App;
