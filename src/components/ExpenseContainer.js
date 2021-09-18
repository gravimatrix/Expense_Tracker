import "../css/ExpenseContainer.css";

const ExpenseContainer = (props) => {
  return (
    <div className="expenseContainer">
      {props.children ? props.children : null}
    </div>
  );
};
export default ExpenseContainer;
