import React from 'react'
import {FirstName,LastName} from '../App'
const ComC = () => {
    return (
        <div>
            <FirstName.Consumer>{(fname)=>{
                    return (
                        <LastName.Consumer>{(lname)=>{
                            return <h1>My first name is {fname} and last name is {lname}</h1>
                        }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </div>
    )
}

export default ComC
