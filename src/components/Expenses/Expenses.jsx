import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './styles/Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = year => {
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  )
}

export default Expenses