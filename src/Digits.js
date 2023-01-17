import React from 'react'

function Digits({updateCalc,calculate,createDigits}) {
  return (
<div className="flex flex-wrap">
    {createDigits() }
    <button className=" flex-auto bg-black" onClick={() => updateCalc('0')}>0</button>
    <button  className="flex-auto bg-black" onClick={() => updateCalc('.')}>.</button>
    <button  className="flex-auto bg-black" onClick={calculate}>=</button>
  </div>

  )
}

export default Digits
