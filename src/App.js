import { useState } from "react";
import Digits from "./Digits";
import Operators from "./Operators";
import Screen from "./Screen";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className="bg-black flex-wrap flex-auto w-1/3"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
    setResult("");
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const clearCalc = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className=" flex min-w-full h-screen items-center justify-center">
      <div className="w-full max-w-sm  rounded-2xl overflow-hidden shadow-lg">
        <Screen result={result} calc={calc} />

        <Operators updateCalc={updateCalc} deleteLast={deleteLast} />

        <Digits
          updateCalc={updateCalc}
          calculate={calculate}
          createDigits={createDigits}
        />

        <div className="bg-red-700 text-center cursor-pointer">
          <button onClick={clearCalc}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
