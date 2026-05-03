"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { ArrowUpDown } from 'lucide-react';

export function UnitConverter() {
  const [value, setValue] = useState<number | ''>(1);
  const [fromUnit, setFromUnit] = useState<string>('meters');
  const [toUnit, setToUnit] = useState<string>('feet');

  // Conversion rates to base unit (meters)
  const lengthRates: Record<string, number> = {
    'meters': 1,
    'kilometers': 1000,
    'centimeters': 0.01,
    'millimeters': 0.001,
    'miles': 1609.34,
    'yards': 0.9144,
    'feet': 0.3048,
    'inches': 0.0254
  };

  const convert = () => {
    if (value === '') return null;
    
    // Convert from source unit to base unit (meters), then from base unit to target unit
    const valueInMeters = Number(value) * lengthRates[fromUnit];
    const convertedValue = valueInMeters / lengthRates[toUnit];
    
    return convertedValue;
  };

  const result = convert();

  const handleSwap = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Length Converter</CardTitle>
        <CardDescription className="text-black font-bold">Convert between metric and imperial length units.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-6">
          <div className="space-y-2 w-full">
            <Label htmlFor="value" className="font-bold">Value to Convert</Label>
            <Input 
              id="value" 
              type="number" 
              className="border-2 border-black rounded-xl p-4 text-xl font-bold"
              value={value} 
              onChange={(e) => setValue(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="space-y-2 flex-1 w-full">
              <Label htmlFor="fromUnit" className="font-bold">From</Label>
              <select 
                id="fromUnit"
                className="w-full border-2 border-black rounded-xl p-4 text-lg font-bold bg-white"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {Object.keys(lengthRates).map(unit => (
                  <option key={unit} value={unit}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-center pb-1">
              <button 
                onClick={handleSwap}
                className="p-3 bg-gray-100 rounded-full border-[3px] border-black hover:bg-gray-200 transition-colors"
                title="Swap units"
              >
                <ArrowUpDown className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="space-y-2 flex-1 w-full">
              <Label htmlFor="toUnit" className="font-bold">To</Label>
              <select 
                id="toUnit"
                className="w-full border-2 border-black rounded-xl p-4 text-lg font-bold bg-white"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                {Object.keys(lengthRates).map(unit => (
                  <option key={unit} value={unit}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {result !== null && (
          <div className="mt-8">
            <div className="bg-[#4a8eff] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-2">Converted Value</p>
              <p className="text-4xl md:text-5xl font-black text-black break-words">
                {result < 0.001 || result > 1000000 ? result.toExponential(4) : result.toLocaleString(undefined, { maximumFractionDigits: 4 })}
              </p>
              <p className="text-lg font-bold text-indigo-700 mt-2">{toUnit}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
