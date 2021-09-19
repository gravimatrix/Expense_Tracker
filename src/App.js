import { useState } from "react";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpenseContainer from "./components/ExpenseContainer";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const [expenseDataList, setExpenseDataList] = useState([]);
  const [filteredExpenseDataList, setFilteredExpenseDataList] = useState([]);

  const saveExpenseDataHandler = (expenseData) => {
    setExpenseDataList((prevExpenseDataList) => {
      return [...prevExpenseDataList, expenseData];
    });

    setFilteredExpenseDataList((prevFilteredExpenseDataList) => {
      return [...prevFilteredExpenseDataList, expenseData];
    });
  };

  const filterExpenseDataHandler = (filterYear) => {
    let newFilteredExpenseDataList = [];
    expenseDataList.map((expenseData) => {
      if (expenseData.date.split("-")[0] == filterYear) {
        newFilteredExpenseDataList.push(expenseData);
      }
    });
    setFilteredExpenseDataList(newFilteredExpenseDataList);
  };

  let expensesContent = <div>No Expenses Found !!!</div>;

  if (filteredExpenseDataList.length) {
    expensesContent = filteredExpenseDataList.map((filteredExpenseData, index) => {
      return (
        <ExpenseItem
          title={filteredExpenseData.title}
          amount={filteredExpenseData.amount}
          date={filteredExpenseData.date}
        />
      );
    });
  }
  return (
    <div className="app">
      <ExpenseInputForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpenseContainer>
        <ExpenseFilter onFilterExpenseData={filterExpenseDataHandler} />
        {expensesContent}
      </ExpenseContainer>
    </div>
  );
}

export default App;
