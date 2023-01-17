import React from 'react'

function Screen({result,calc}) {
  return (
    <div className="p-4 text-right bg-orange-400 text-black text-base font-bold">
 <span className="text-xs text-white">{result ? '('+ result +')' : '' }</span> {calc || 0}
    </div>
  )
}

export default Screen
