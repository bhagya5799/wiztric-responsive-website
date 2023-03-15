import React, { useEffect, useState } from 'react'
import Header from '../Header'
import ChildData from '../ChildData'
import './index.css'
import Tables from '../Tables'

const TotalData = [
    {
        name: "Today's Generation",
        nbr: 14.36,
        value: "MW",
        class: "first",
        css:'color-1',
        box:'border-1'
    },
    {
        name: "Plant Efficiency",
        nbr: 95.75,
        value: "%",
        class: "second",
        css: 'color-2',
        box: 'border-2'
    },
    {
        name: "Todays Energy Consumption",
        nbr: 11.81,
        value: "KWh",
        class: "third",
        css: 'color-3',
        box: 'border-3',

    },
    {
        name: "Life Time Energy",
        nbr: 1406.1,
        value: "GWh",
        class: "four",
        css: 'color-4',
        box: 'border-4'
    },
]



const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(TotalData)
    }, [])
    console.log(data)
    return (
        <div className='home-container'>
            <Header />
            <div className='total-result-card'>
                <ul>
                    {TotalData.map((each) => (
                        <ChildData dataDetails={each} key={each.name} />
                    ))}
                </ul>
            </div>
            <div className='body'>
                <h4 className='table-name'>InverterData tables</h4>
                <div className='table-data'>
                    <Tables />
                </div>
               
            </div>

        </div>
    )
}

export default Home