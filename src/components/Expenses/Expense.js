import React, { useState } from 'react';

import ExpensesList from './ExpenseList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import Expenseschart from './ExpenseChart';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear)
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key ={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <Expenseschart expense ={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>{/*This is another method*/}
      </Card>
    </div>
  );
};

export default Expenses;