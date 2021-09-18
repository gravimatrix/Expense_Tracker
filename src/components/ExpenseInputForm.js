import { useState } from "react";
import "../css/ExpenseInputForm.css";

const ExpenseInputForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: inputDate,
    };
    props.onSaveExpenseData(expenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form className="expense-input-form" onSubmit={submitHandler}>
      <div className="top-div">
        <div className="top-div-title">
          <label htmlFor="title" id="title-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="top-div-amount">
          <label htmlFor="amount" id="amount-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="mid-div">
        <div className="mid-div-date">
          <label htmlFor="date" id="date-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="bottom-div">
        <button id="add-expense-btn">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseInputForm;
