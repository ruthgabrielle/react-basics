import React from 'react'
import Chart from '../Chart/Chart'

const ExpenseChart = (props) => {

    const chartDataMonths = [
        {label: 'Jan', value: 0},
        {label: 'Fev', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //Jan = 0
        chartDataMonths[expenseMonth].value += expense.amount;
    }

    return <Chart dataMonths={chartDataMonths}/>
}
export default ExpenseChart