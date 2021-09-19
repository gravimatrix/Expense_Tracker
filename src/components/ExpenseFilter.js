import "../css/ExpenseFilter.css"

const ExpenseFilter = (props) => {
  return (
    <div className="expense-filter-div">
      <label htmlFor="year">Filter by year</label>
      <select name="year" id="year" onChange={(e) => props.onFilterExpenseData(e.target.value)}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
