import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function SelfExpenses(props) {
  const item = props.items; 

  return (
    <div className="expenses">
       {item.map((element) => 
       (
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
      />))}
    </div>
  );
}

export default SelfExpenses;