import logo from './logo.svg';
import './App.css';
import Countercomponent from './Countercomponent';

function App(props) {
  return (
    <div className="App">
     <h2> {props.Componentname} Component</h2>
      <Countercomponent componentName="Counter"/>
    </div>
  );
}

export default App;
