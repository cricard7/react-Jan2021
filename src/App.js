import logo from './logo.svg';
import './App.css';
import Documentation from './Documentation'
import Counter from './Components/Counter'
import Propex from './Components/Propex'
function App() {
  const headerText = 'Hello youtube';
  
  const EmployeeInfo = [
    {firstName: "Jack",
    lastName: "Sparrow"},
    {firstName: "Bilbow",
    lastName: 'Baggins'}]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload. Test <code>{headerText}</code>
          <Documentation/>
          <Counter/>
          <Propex firstName = "Bill" lastName = "Smith"/>
          <Propex firstName = "Bob" lastName = "Thorton"/>

          {/* 
            Loop
          */}
          <h2>Looping through array and displaying</h2>

          {EmployeeInfo.map(employee => {
            //const {firstName, lastName} = employee;
            //or destructuring below
            return(
              <Propex {...employee}/>
            )
            
          })
          }

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
