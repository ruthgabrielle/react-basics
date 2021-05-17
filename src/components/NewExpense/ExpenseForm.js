import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newAmount, setNewAmount] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: newAmount,
            date: new Date(newDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setNewAmount('')
        setNewDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                     type='number' 
                     value={newAmount} 
                     min="0.01" 
                     step="0.01" 
                     onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type='date' 
                    value={newDate} 
                    min="2021-05-13" 
                    max="2023-05-13" 
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
            
        </form>
    )
}
export default ExpenseForm