import ExpenseDate from "./ExpenseDate";
import "../css/ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <ExpenseDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
      <div className="expense-item__title">{expenseTitle}</div>
      <div className="expense-item__amount">&#x20b9; {expenseAmount}</div>
    </div>
  );
};

export default ExpenseItem;
