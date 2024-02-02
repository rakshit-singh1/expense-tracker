import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpenses/NewExpenses'
const dummy_expenses=[
    {
      id: 'e1',
      title: 'Chowmin',
      amount: '10',
      date: new Date(2023, 11, 28),//in javascript month is from 0 to 11
    },
    {
      id: 'e2',
      title: 'pasta',
      amount: '50',
      date: new Date(2023, 11, 28),
    },
    {
      id: 'e3',
      title: 'Chaat',
      amount: '30',
      date: new Date(2023, 11, 28),
    },
    {
      id: 'e4',
      title: 'Fare',
      amount: '10',
      date: new Date(2023, 11, 28),
    },
  ];
  const App = () => {
  
  
  const[expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;