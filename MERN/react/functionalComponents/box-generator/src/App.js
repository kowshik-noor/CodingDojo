import './App.css';
import BoxForm from './components/BoxForm';
import BoxContent from './components/BoxContent';
import React, { useState } from 'react'
import { Provider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

const engine = new Styletron()

function App() {
  const [boxes, setBoxes] = useState([])

  const sendBox = newBox => setBoxes([...boxes, newBox])

  return (
    <Provider value={engine}>
      <BoxForm onNewBox={sendBox}></BoxForm>
      <BoxContent boxes = {boxes}></BoxContent>
    </Provider>
  );
}

export default App;
