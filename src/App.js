import logo from './logo.svg';
import './App.css';
import Documentation from './Documentation'
import Counter from './Components/Counter'
import Propex from './Components/Propex'
import Destructuring from './Components/Destructuring'
import MapLoop from './Components/MapLoop'

function App() {
  const headerText = 'Hello youtube';
  
  const EmployeeInfo = [
    {firstName: "Jack",
    lastName: "Sparrow",
    id: 1},
    {firstName: "Bilbow",
    lastName: 'Baggins',
    id: 2}]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload. Test <code>{headerText}</code>
          
          <hr/>
          <h1>#1/#2 Basic component</h1>
          <Documentation/>
          <hr/>
          
          <h1>#2 Use State</h1>
          <Counter/>

          <hr/>
          <h1>#3 Props</h1>
          <Propex firstName = "Bill" lastName = "Smith"/>
          <Propex firstName = "Bob" lastName = "Thorton"/>
         
          {/* 
            Loop
          */}
          
          <h2>Looping through array and displaying</h2>

          {EmployeeInfo.map(employee => 
            //const {firstName, lastName} = employee;
            //or destructuring below as long as the keys in the objects are the same we are using in the
            //component
            (
              <Propex {...employee} key={employee.id}/>
            )
            
          )
          }

          <hr/>

          <h1>#4 Destructuring</h1>
          <Destructuring/>
          
          <hr/>

          <h1>#5 Map and Loops in JSX</h1>
          <MapLoop/>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
