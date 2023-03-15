import React from 'react'
import './index.css'

const ChildData = (props) => {
    const { dataDetails } =props
    console.log('data', dataDetails)
  return (
    <div className={dataDetails.box}>
        <li>
              <span className={dataDetails.class}>{dataDetails.name}</span>
              <h2 className={dataDetails.css}>{dataDetails.nbr} <span>{dataDetails.value}</span></h2>
        </li>
    </div>
  )
}

export default ChildData
