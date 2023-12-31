import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next, operation } = state;

  return (
    <div className="container">
      <div className="wrapper">
        <button type="button" className="display">
          {total}
          {operation}
          {next}
        </button>
        <button type="button" className="btn grey" onClick={handleClick}>AC</button>
        <button type="button" className="btn grey" onClick={handleClick}>+/-</button>
        <button type="button" className="btn grey" onClick={handleClick}>%</button>
        <button type="button" className="btn orange" onClick={handleClick}>/</button>
        <button type="button" className="btn grey" onClick={handleClick}>7</button>
        <button type="button" className="btn grey" onClick={handleClick}>8</button>
        <button type="button" className="btn grey" onClick={handleClick}>9</button>
        <button type="button" className="btn orange" onClick={handleClick}>x</button>
        <button type="button" className="btn grey" onClick={handleClick}>4</button>
        <button type="button" className="btn grey" onClick={handleClick}>5</button>
        <button type="button" className="btn grey" onClick={handleClick}>6</button>
        <button type="button" className="btn orange" onClick={handleClick}>-</button>
        <button type="button" className="btn grey" onClick={handleClick}>1</button>
        <button type="button" className="btn grey" onClick={handleClick}>2</button>
        <button type="button" className="btn grey" onClick={handleClick}>3</button>
        <button type="button" className="btn orange" onClick={handleClick}>+</button>
        <button type="button" className="btn grey span" onClick={handleClick}>0</button>
        <button type="button" className="btn grey" onClick={handleClick}>.</button>
        <button type="button" className="btn orange" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
