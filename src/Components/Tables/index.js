import React from 'react'
import './index.css'

const Tables
    = () => {
        const data = [{
            Inverter: 'Block-1_inverter-1',
            Voltage: '232',
            ActivePower: '957',
            Current: '133',
            ApparentPower:'977.55',
            IGGBTTemp:'50',
            InductorTemp:'42',
            DcInputPower:'963.1',
            AmbitentTemp:'25',
            DcVoltage:'653',
            LifeTimeEnergy:'937.33',
            EnergyForDay:'789.33',
            WaterTemp:'24'

        },
        {
            Inverter: 'Block-2_inverter-2',
            Voltage: '232',
            ActivePower: '957',
            Current: '120',
            ApparentPower: '977.55',
            IGGBTTemp: '50',
            InductorTemp: '42',
            DcInputPower: '963.1',
            AmbitentTemp: '25',
            DcVoltage: '653',
            LifeTimeEnergy: '937.33',
            EnergyForDay: '789.33',
            WaterTemp: '24'
        },
        {
            Inverter: 'Block-3_inverter-3',
            Voltage: '232',
            ActivePower: '957',
            Current: '170',
            ApparentPower: '977.55',
            IGGBTTemp: '50',
            InductorTemp: '42',
            DcInputPower: '963.1',
            AmbitentTemp: '25',
            DcVoltage: '653',
            LifeTimeEnergy: '937.33',
            EnergyForDay: '789.33',
            WaterTemp: '24'
        },
            {
                Inverter: 'Block-2_inverter-1',
                Voltage: '234',
                ActivePower: '1298',
                Current: '1234',
                ApparentPower: '951.83',
                IGGBTTemp: '93',
                InductorTemp: '48',
                DcInputPower: '963.1',
                AmbitentTemp: '245',
                DcVoltage: '998',
                LifeTimeEnergy: '937.33',
                EnergyForDay: '457.33',
                WaterTemp: '20'
            },
            {
                Inverter: 'Block-2_inverter-2',
                Voltage: '237',
                ActivePower: '1298',
                Current: '952',
                ApparentPower: '951.83',
                IGGBTTemp: '98',
                InductorTemp: '58',
                DcInputPower: '863.1',
                AmbitentTemp: '345',
                DcVoltage: '1098',
                LifeTimeEnergy: '837.33',
                EnergyForDay: '457.33',
                WaterTemp: '24'
            },
            {
                Inverter: 'Block-2_inverter-3',
                Voltage: '237',
                ActivePower: '1298',
                Current: '952',
                ApparentPower: '956.83',
                IGGBTTemp: '91',
                InductorTemp: '55',
                DcInputPower: '863.1',
                AmbitentTemp: '345',
                DcVoltage: '1098',
                LifeTimeEnergy: '837.33',
                EnergyForDay: '457.33',
                WaterTemp: '24'
            },
            {
                Inverter: 'Block-3_inverter-1',
                Voltage: '236',
                ActivePower: '1292',
                Current: '952.5',
                ApparentPower: '980.3',
                IGGBTTemp: '97',
                InductorTemp: '53',
                DcInputPower: '863.1',
                AmbitentTemp: '345',
                DcVoltage: '1098',
                LifeTimeEnergy: '837.33',
                EnergyForDay: '457.33',
                WaterTemp: '24'
            },
            {
                Inverter: 'Block-2_inverter-2',
                Voltage: '237',
                ActivePower: '1298',
                Current: '952',
                ApparentPower: '951.83',
                IGGBTTemp: '93',
                InductorTemp: '51',
                DcInputPower: '863.1',
                AmbitentTemp: '345',
                DcVoltage: '1098',
                LifeTimeEnergy: '837.33',
                EnergyForDay: '457.33',
                WaterTemp: '24'
            },]

        const headings = Object.keys(data[0])

        // const mapInverter = data.map((each) => each.Inverter).filter((item,index) => {
        //     if (index % 2 === 0){
        //         return 'true'
        //     }
        //     else{
        //         return 'false'
        //     }
        // })

        // console.log(mapInverter,'ok')

        return (
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            {headings.map(head=>(
                                <th>{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row=>(
                            <tr className='table-data-rows'>
                                <td className='inverter'>{row.Inverter}</td>
                                <td>{row.Voltage}</td>
                                <td>{row.ActivePower}</td>
                                <td>{row.Current}</td>
                                <td>{row.ApparentPower}</td>
                                <td>{row.IGGBTTemp}</td>
                                <td>{row.InductorTemp}</td>
                                <td>{row.DcInputPower}</td>
                                 <td>{row.AmbitentTemp}</td>
                                <td>{row.DcVoltage}</td>
                                <td>{row.LifeTimeEnergy}</td>
                                <td>{row.EnergyForDay}</td>
                                <td>{row.WaterTemp} &nbsp;&nbsp;<button className='view-btn'>View</button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

export default Tables
