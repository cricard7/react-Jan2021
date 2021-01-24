import React from 'react'


const employee = {
    id:'ABC',
    name: 'Anothony',
    salary: '$10',
    address: {
        street: "345 Wall St",
        PostalCode: "R4E1E7",
        zone: {
            zoneNumber: '2313',
            ZoneType: 'Green'
        }
    }
}

const {name, id, salary, address} = employee
const {street, PostalCode, zone} = address // further destructuring
const {zoneNumber: zoneN, ZoneType: zoneT} = zone // futher destructuring with aliasing

//eg of destructuring in place. This is less clear but takes less space
//const {name, id, salary, address: {street, PostalCode, zone: {zoneNumber}}} = employee

const Destructuring = () => {

  return (
    <React.Fragment>
        <div>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuring - Mozilla</a>
            <p>Name: {name}</p>
            <p>id: {id}</p>
            <p>salary: {salary}</p>
            <p>street: {street}</p>
            <p>PostalCode: {PostalCode}</p>
            <p>zoneN: {zoneN}</p>
            <p>zoneT: {zoneT}</p>



        </div>
    </React.Fragment>
  );
}

export default Destructuring;
