import { useState } from "react";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpenseContainer from "./components/ExpenseContainer";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const [expenseDataList, setExpenseDataList] = useState([]);

  const saveExpenseDataHandler = (expenseData) => {
    setExpenseDataList((prevExpenseDataList) => {
      return [...prevExpenseDataList, expenseData];
    });
  };

  return (
    <div className="app">
      <ExpenseInputForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpenseContainer>
        {//Outputting List and Conditional Rendering
        expenseDataList.map((expenseData, index) => {
          return (
            <ExpenseItem
              title={expenseData.title}
              amount={expenseData.amount}
              date={expenseData.date}
            />
          );
        })}
      </ExpenseContainer>
    </div>
  );
}

export default App;
