import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const filterDropdownChange = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select value={props.selected} onChange={filterDropdownChange}>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ExpensesFilter;