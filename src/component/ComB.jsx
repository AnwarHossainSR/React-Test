import React,{useContext} from 'react'
import {FirstName,LastName} from '../App'
//import ComC from './ComC';

const ComB = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <div>
            <h1>my name is {fname} {lname}</h1>
            {/* <ComC /> */}
        </div>
    )
}

export default ComB
