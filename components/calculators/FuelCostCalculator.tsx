"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function FuelCostCalculator() {
  const [distance, setDistance] = useState<number | ''>(100);
  const [efficiency, setEfficiency] = useState<number | ''>(25);
  const [price, setPrice] = useState<number | ''>(3.50);
  const [unit, setUnit] = useState<'mpg' | 'l100km'>('mpg');

  const calculate = () => {
    const d = Number(distance) || 0;
    const e = Number(efficiency) || 0;
    const p = Number(price) || 0;
    
    let fuelNeeded = 0;
    if (unit === 'mpg') {
       fuelNeeded = e > 0 ? d / e : 0;
    } else {
       fuelNeeded = (d / 100) * e;
    }
    
    const cost = fuelNeeded * p;
    return { cost, fuelNeeded };
  };

  const { cost, fuelNeeded } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Fuel Cost</CardTitle>
        <CardDescription>Calculate travel cost based on distance and vehicle efficiency.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
         <div className="flex bg-white rounded-xl border-[3px] border-black p-1 shadow-[2px_2px_0_0_#000]">
          <button 
            className={`flex-1 rounded-lg font-bold text-sm h-10 transition-colors ${unit === 'mpg' ? 'bg-[#ffab40] text-black border-2 border-black' : 'hover:bg-gray-100 border-2 border-transparent'}`}
            onClick={() => setUnit('mpg')}
          >
            MPG (Miles/Gallons)
          </button>
          <button 
            className={`flex-1 rounded-lg font-bold text-sm h-10 transition-colors ${unit === 'l100km' ? 'bg-[#ffab40] text-black border-2 border-black' : 'hover:bg-gray-100 border-2 border-transparent'}`}
            onClick={() => setUnit('l100km')}
          >
            L/100km (Km/Liters)
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Distance ({unit === 'mpg' ? 'Miles' : 'Kilometers'})</Label>
            <Input type="number" value={distance} onChange={e => setDistance(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Fuel Efficiency ({unit === 'mpg' ? 'MPG' : 'L/100km'})</Label>
            <Input type="number" value={efficiency} onChange={e => setEfficiency(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Fuel Price per {unit === 'mpg' ? 'Gallon' : 'Liter'} ($)</Label>
            <Input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#ffab40] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Total Fuel Cost</p>
          <p className="text-5xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
             ${cost.toFixed(2)}
          </p>
          <div className="mt-4 pt-4 border-t-[3px] border-black text-black">
             <p className="text-xs font-bold uppercase tracking-wider">Fuel Required</p>
             <p className="text-xl font-bold">{fuelNeeded.toFixed(2)} {unit === 'mpg' ? 'Gallons' : 'Liters'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
