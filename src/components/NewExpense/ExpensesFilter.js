import React from 'react';
import Card from '../UI/Card';

import './ExpensesFilter.css';

const ExpensesFilter = () => {

    const filterChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select onChange={filterChange}>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ExpensesFilter;