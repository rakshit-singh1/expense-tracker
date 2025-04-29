import React, { useState, useEffect } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpenses/NewExpenses';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Chowmin',
    amount: '10',
    date: new Date(2023, 11, 28),
  },
  {
    id: 'e2',
    title: 'Pasta',
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
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage initially
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      const parsedExpenses = JSON.parse(storedExpenses);
      const expensesWithDate = parsedExpenses.map(exp => ({
        ...exp,
        date: new Date(exp.date),
      }));
      setExpenses(expensesWithDate);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [expense, ...prevExpenses];
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
