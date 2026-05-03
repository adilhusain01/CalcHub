"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      // Basic evaluation logic for demonstration
      const expression = equation + display;
      // Using Function constructor as a slightly safer alternative to eval for simple math
      const result = new Function('return ' + expression.replace(/×/g, '*').replace(/÷/g, '/'))();
      
      setDisplay(String(result));
      setEquation('');
    } catch (e) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const calculateScientific = (func: string) => {
    const val = parseFloat(display);
    let res = 0;
    
    switch(func) {
      case 'sin': res = Math.sin(val); break;
      case 'cos': res = Math.cos(val); break;
      case 'tan': res = Math.tan(val); break;
      case 'log': res = Math.log10(val); break;
      case 'ln': res = Math.log(val); break;
      case 'sqrt': res = Math.sqrt(val); break;
      case 'sq': res = Math.pow(val, 2); break;
    }
    
    setDisplay(String(res));
  };

  const btnClass = "py-4 text-lg font-bold bg-gray-100 hover:bg-gray-200 border-2 border-black rounded-xl transition-colors active:scale-95";
  const opBtnClass = "py-4 text-lg font-bold bg-amber-400 hover:bg-amber-500 border-2 border-black rounded-xl transition-colors active:scale-95";
  const sciBtnClass = "py-4 text-sm font-bold bg-[#4a8eff] hover:bg-blue-200 border-2 border-black rounded-xl transition-colors active:scale-95";

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Scientific Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Advanced mathematical operations at your fingertips.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="bg-gray-100 p-6 rounded-2xl border-4 border-black text-right shadow-inner min-h-[120px] flex flex-col justify-end">
          <div className="text-gray-500 font-mono text-sm h-6">{equation}</div>
          <div className="text-5xl font-black font-mono overflow-hidden break-all">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {/* Scientific Row 1 */}
          <button className={sciBtnClass} onClick={() => calculateScientific('sin')}>sin</button>
          <button className={sciBtnClass} onClick={() => calculateScientific('cos')}>cos</button>
          <button className={sciBtnClass} onClick={() => calculateScientific('tan')}>tan</button>
          <button className={sciBtnClass} onClick={() => calculateScientific('log')}>log</button>
          
          {/* Scientific Row 2 */}
          <button className={sciBtnClass} onClick={() => calculateScientific('ln')}>ln</button>
          <button className={sciBtnClass} onClick={() => calculateScientific('sqrt')}>√x</button>
          <button className={sciBtnClass} onClick={() => calculateScientific('sq')}>x²</button>
          <button className={opBtnClass} onClick={() => handleOperator('/')}>÷</button>

          {/* Num Row 1 */}
          <button className={btnClass} onClick={() => handleNumber('7')}>7</button>
          <button className={btnClass} onClick={() => handleNumber('8')}>8</button>
          <button className={btnClass} onClick={() => handleNumber('9')}>9</button>
          <button className={opBtnClass} onClick={() => handleOperator('*')}>×</button>

          {/* Num Row 2 */}
          <button className={btnClass} onClick={() => handleNumber('4')}>4</button>
          <button className={btnClass} onClick={() => handleNumber('5')}>5</button>
          <button className={btnClass} onClick={() => handleNumber('6')}>6</button>
          <button className={opBtnClass} onClick={() => handleOperator('-')}>-</button>

          {/* Num Row 3 */}
          <button className={btnClass} onClick={() => handleNumber('1')}>1</button>
          <button className={btnClass} onClick={() => handleNumber('2')}>2</button>
          <button className={btnClass} onClick={() => handleNumber('3')}>3</button>
          <button className={opBtnClass} onClick={() => handleOperator('+')}>+</button>

          {/* Num Row 4 */}
          <button className="py-4 text-lg font-bold bg-red-400 hover:bg-red-500 border-2 border-black rounded-xl transition-colors active:scale-95 text-white" onClick={clear}>C</button>
          <button className={btnClass} onClick={() => handleNumber('0')}>0</button>
          <button className={btnClass} onClick={() => handleNumber('.')}>.</button>
          <button className="py-4 text-lg font-bold bg-green-500 hover:bg-green-600 border-2 border-black rounded-xl transition-colors active:scale-95 text-white" onClick={calculate}>=</button>
        </div>
      </CardContent>
    </Card>
  );
}
