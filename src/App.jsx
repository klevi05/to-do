import './App.css';
import React , {useState} from 'react';
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import TextBox from "./components/TextBox";

function App() {
  const [input, setInput] = useState('');
  const [gjendja, setGjendja] = useState([]);
  return (
    <React.Fragment>
      <Navbar />
      <Text setInput={setInput} input={input} setGjendja={setGjendja} gjendja={gjendja}/>
      <TextBox gjendja={gjendja}/>
    </React.Fragment>
  );
}

export default App;
