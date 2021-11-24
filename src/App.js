import './App.css';
import Countercomponent from './Countercomponent';
import CounterApp from './CounterApp';

function App(props) {
  return (
    <div className="App">
     <h2> {props.Componentname} Component</h2>
      <Countercomponent componentName="Counter"/>
      <CounterApp/>
    </div>
  );
}

export default App;
