import React from 'react';
import { useEffect, useState } from 'react';
import './Filter.css';

const Filter = (props) => {
    const [month,setMonth] = useState("2022")
    const monthText =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const monthChage = (event) =>{
        // console.log(monthText)
        setMonth(event.target.value)
    }
    props.onChangeMonth(month)

    return (
       <div>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select onChange={monthChage}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </select>
                </div>
                
            </div>
            <div className="fliter-ui">
                <ul>
                    {
                        monthText.map((text)=>{
                            return (
                                <li>
                                    <div className='filter-bar'><span></span></div>
                                    <p>{text}</p>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>
       </div>
    );
};

export default Filter;