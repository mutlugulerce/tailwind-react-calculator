

const App = () => {

const createDigits = () => {
const digits= [];

for(let i=1; i<10; i++){
  digits.push(
    <button key={i}>{i}</button>
  )
}
return digits;
}

  return (
    
   <div>
   <div>
    <div>
      <span>0</span> 0
    </div>

    <div>
      <button>/</button>
      <button>*</button>
      <button>-</button>
      <button>+</button>

      <button>DEL</button>
    </div>

  <div>
    {createDigits()}
    <button>0</button>
    <button>.</button>
    <button>=</button>
  </div>
   </div>
   </div>
  );
}

export default App;
