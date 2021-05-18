import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './styles/ExpenseItem.css';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const titleClickHandler = () => {
    setTitle('Updated')
  }

  return (
    <li>
      <Card className={`expense-item ${props.id}`}>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            ${props.amount}
          </div>
        </div>
        <button onClick={titleClickHandler}>Change Title</button>
      </Card>
    </li>
  )
}

export default ExpenseItem;