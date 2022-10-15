import logo from './logo.svg';
import './App.css';
import Input from './Components/Input'
import Button from './Components/Button'
import { useState } from 'react';


function App() {

  let [text, setText] = useState();
  let [list, setList] = useState();

  

  console.log(list)
  return (
    <div className="App">
      <header className="App-header">

        <div>
          <Input label="Enter Text" value={text} onChange={() => console.log("In Text")} />
          <Button label='Add' />
        </div>



      </header>
    </div>
  );
}

export default App;
