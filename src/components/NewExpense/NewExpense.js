import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) => {
    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(true)
    }

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setOpen(false)
    }

    const closeHandler = () => {
        setOpen(false)
    }

    return <div className="new-expense">
        {!open && <button onClick={openHandler}>Add New Expense</button>}
        {open && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={closeHandler}/>}
    </div >
}
export default NewExpense