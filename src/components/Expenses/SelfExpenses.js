import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

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
          onChangeFilter={filterChangedHandler} />
          {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />))}
      </Card>
    </div>
  );
};

export default SelfExpenses;
