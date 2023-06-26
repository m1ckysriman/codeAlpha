import React , { useState } from 'react'
import '../style.css'


function App() {

  const [color, setColor] = useState('');

  const changeColor = (event) => {
    setColor(event.target.value);
  };

  const submitButton = (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = color;
  };

  return (
    <div className='toolform'>
      <h2>Pick you'r Color</h2>
      <form className='formmign' onSubmit={submitButton}>
        <input type="color" value={color} onChange={changeColor} />
        <button type="submit" className="designButton">Change color</button>
      </form>
    </div>
  );
};  

export default App