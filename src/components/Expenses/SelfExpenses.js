import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';


function SelfExpenses(props) {
  const item = props.items; 

  return (
    <Card className="expenses">
       {item.map((element) => 
       (
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
      />))}
    </Card>
  );
}

export default SelfExpenses;