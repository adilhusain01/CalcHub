"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function BMICalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<number | ''>(70);
  const [cm, setCm] = useState<number | ''>(175);
  const [ft, setFt] = useState<number | ''>(5);
  const [inVal, setInVal] = useState<number | ''>(9);

  const calculate = () => {
    let w = Number(weight) || 0;
    let h = 0;

    if (unit === 'metric') {
      h = (Number(cm) || 0) / 100;
      if (h === 0) return 0;
      return w / (h * h);
    } else {
      h = ((Number(ft) || 0) * 12) + (Number(inVal) || 0);
      if (h === 0) return 0;
      return (w / (h * h)) * 703;
    }
  };

  const bmi = calculate();
  
  let category = '';
  let color = 'bg-gray-100';
  if (bmi > 0) {
    if (bmi < 18.5) { category = 'Underweight'; color = 'bg-[#4a8eff]'; }
    else if (bmi < 24.9) { category = 'Normal Weight'; color = 'bg-[#9ed8a0]'; }
    else if (bmi < 29.9) { category = 'Overweight'; color = 'bg-[#ffd043]'; }
    else { category = 'Obese'; color = 'bg-[#ff6e50]'; }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>BMI Calculator</CardTitle>
        <CardDescription>Calculate your Body Mass Index.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex bg-white rounded-xl border-[3px] border-black p-1 shadow-[2px_2px_0_0_#000]">
          <Button 
            className="flex-1 rounded-lg border-none shadow-none h-10" 
            variant={unit === 'metric' ? 'default' : 'ghost'} 
            onClick={() => setUnit('metric')}
          >
            Metric
          </Button>
          <Button 
            className="flex-1 rounded-lg border-none shadow-none h-10" 
            variant={unit === 'imperial' ? 'default' : 'ghost'} 
            onClick={() => setUnit('imperial')}
          >
            Imperial
          </Button>
        </div>

        {unit === 'metric' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Weight (kg)</Label>
              <Input type="number" value={weight} onChange={e => setWeight(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Height (cm)</Label>
              <Input type="number" value={cm} onChange={e => setCm(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2 sm:col-span-3">
              <Label>Weight (lbs)</Label>
              <Input type="number" value={weight} onChange={e => setWeight(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
            <div className="space-y-2 sm:col-span-1">
              <Label>Height (ft)</Label>
              <Input type="number" value={ft} onChange={e => setFt(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label>Height (in)</Label>
              <Input type="number" value={inVal} onChange={e => setInVal(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
          </div>
        )}

        <div className={`rounded-[16px] border-[3px] border-black p-6 ${color} shadow-[4px_4px_0_0_#000] transition-colors duration-300`}>
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Your BMI</p>
          <p className="text-5xl font-black tracking-tight text-black">
            {bmi > 0 ? bmi.toFixed(1) : '0.0'}
          </p>
          {bmi > 0 && (
             <div className="mt-4 pt-4 border-t-[3px] border-black">
               <p className="text-xl font-black text-black">{category}</p>
             </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
