import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const valueMonth = props.dataMonths.map(dataMonths => dataMonths.value)
    const total = Math.max(...valueMonth)

    return <div className = "chart">
        {props.dataMonths.map((dataMonths => 
        <ChartBar 
        key={dataMonths.label}
        value={dataMonths.value} 
        maxValue={total} 
        label={dataMonths.label}/>))}
    </div>

}
export default Chart