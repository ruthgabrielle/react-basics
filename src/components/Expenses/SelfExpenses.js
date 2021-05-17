import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

const SelfExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
          <ExpenseChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default SelfExpenses;
