import React from 'react'

function Operators({updateCalc,deleteLast}) {
  return (
    
      <div className="flex bg-blue-500 ">
      <button className="flex-1 font-bold  " onClick={() => updateCalc('/')}>/</button>
      <button className="flex-1 font-bold  " onClick={() => updateCalc('*')}>*</button>
      <button className="flex-1 font-bold  " onClick={() => updateCalc('-')}>-</button>
      <button className="flex-1 font-bold  " onClick={() => updateCalc('+')}>+</button>

      <button className="flex-1 font-bold  bg-red-600" onClick={deleteLast} >DEL</button>
    </div>
    
  )
}

export default Operators
