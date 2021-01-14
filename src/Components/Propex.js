import React from 'react'


const Propex = (props) => {
//OR const Propex = ({firstName, lastName})

  //object destructuring either above or within the function
  //const { firstName, lastName} = props;
  return (
    <React.Fragment>
     <h1>Prop Passed in: {props.firstName} {props.lastName}</h1>
     <h1>{`Using String interpolation: ${props.firstName}`}</h1>
      
    </React.Fragment>
  );
}

export default Propex;
