import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Shyam'Age='20' work='IT'/>
      <Greet name= "Ram" Age='25' work='Civil' designation='Engineer'/>
      <Greet name='Raja'Age='30' work='IT'>
        <p>this is children props</p>
      </Greet>
      <Greet name='Ravi' Age='35' work='IT'/>
 
    </div>
  );
}

export default App;
