import React,  { useState } from 'react';
import './styles/ExpenseForm.css'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  /* SINGLE STATE*/ 
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // })

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
    /* SINGLE STATE CHANGE - this method may not always capture the latest state */
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value
    // });

    /* SINGLE STATE CHANGE - this method will always capture latest state */
    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // })
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }

    props.onSaveExpenseData(expenseData)
    setTitle('');
    setAmount('');
    setDate('');
  }

  // A button with a type "submit" is pressed inside a form, the form element emits the event
  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input 
              type="number" 
              value={amount}
              min="0.01" 
              step="0.01" 
              onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input 
              type="date" 
              value={date}
              min="2019-01-01" 
              max="2022-12-31" 
              onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  )
}

export default ExpenseForm;