import React from 'react'
// OR we can import React, {useState} from 'react
// then use just useState below

const Counter = () => {
//useState - create a reactive variable and a way to affect it
//destructuring
const [count, setCount] = React.useState(5)
//one way to do it. See 
const handleIncrement = () => {
    setCount(count + 1)
}


  return (
    <React.Fragment>
      <p>React.Fragement is a substitute top level component 
          in case you do not want to use one such as a DIV
      </p>
      <p>The count is: {count}</p>
      {/* Function inside JSX is passed by a reference (No bracket otherwise it will run
        on render). See decrement on how to do it inline */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count -1)}>Decrement</button>
      
    </React.Fragment>
  );
}

export default Counter;
