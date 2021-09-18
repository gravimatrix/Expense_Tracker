import "../css/ExpenseDate.css"

const ExpenseDate = (props) => {
  let expenseDate = new Date(props.date);
  let expenseDateYear = expenseDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let expenseDateMonth = monthNames[expenseDate.getMonth()];
  let expenseDateDay = expenseDate.getDate();
  expenseDateDay =
    Math.floor(expenseDateDay / 10) === 0
      ? "0" + expenseDateDay
      : expenseDateDay;

  return (
    <div className="expense-item__date">
      <p className="expense-item__date__month">{expenseDateMonth}</p>
      <p className="expense-item__date__year">{expenseDateYear}</p>
      <p className="expense-item__date__day">{expenseDateDay}</p>
    </div>
  );
};

export default ExpenseDate;