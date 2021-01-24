import React from 'react'
import Employee from './Employee'

const empArr = ["Anothony", "Kevin", "Stephanie", "George"]
const employees = [
    {
        name: "Anothony",
        id: '1'
    },
    {
        name: "Kevin",
        id: '2'
    },
    {
        name: 'Stephanie',
        id: '3'
    },
    {
        name: 'George',
        id: '4'
    }
]
const MapLoop = () => {

  return (
    <React.Fragment>
        <div>MapLoop with Array of strings</div>
        {empArr.map((employee) =>(
            <p> {employee}</p>
        ))}

        <div>Map with Array of objects with destructuring</div>
        {employees.map((employee) => {
            const {name, id} = employee
            return(
                <Employee key={id} name={name} id={id}/>
            )
        })}

    </React.Fragment>
  );
}

export default MapLoop;
