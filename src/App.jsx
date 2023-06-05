import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [tempColor, setColor] = useState("cold")


  const handleIncrease = () => {
    const newTemperature = count + 1

    if(newTemperature > 15){
      setColor("hot")
    }
    setCount(newTemperature)

  };

  const handleDecrease = () => {

    const newTemperature = count - 1

    if(newTemperature < 15){
      setColor("cold")
    }
    setCount(newTemperature)

  }


  return (
    
    <div >
      <h1>React Temperature Changer</h1>
    <div className={`tempColor ${tempColor}`}>
      <div className='temperature'>
      {count}'C
      </div>
      
    </div>
    <div className='mybtn'>
    <button className='btn hotbtn' onClick={handleIncrease}>Increase Temperature</button>
    <button className='btn coldbtn' onClick={handleDecrease}>Decrease Temperature</button>
    </div>

    </div>
  )
}

export default App
