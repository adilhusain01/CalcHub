"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function WaterIntakeCalculator() {
  const [weight, setWeight] = useState<number | ''>(150);
  const [exercise, setExercise] = useState<number | ''>(30); // minutes

  const calculate = () => {
    const w = Number(weight) || 0;
    const m = Number(exercise) || 0;
    
    // Formula: Weight in lbs / 2 to get ounces. Add 12 oz for every 30 mins exercise.
    const baseOz = w / 2;
    const extraOz = (m / 30) * 12;
    const totalOz = baseOz + extraOz;
    
    const liters = totalOz * 0.0295735;
    const cups = totalOz / 8;

    return { totalOz, liters, cups };
  };

  const { totalOz, liters, cups } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Water Intake Calculator</CardTitle>
        <CardDescription>Daily hydration goal based on your body weight.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Weight (lbs)</Label>
            <Input type="number" value={weight} onChange={e => setWeight(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Daily Exercise (mins)</Label>
            <Input type="number" value={exercise} onChange={e => setExercise(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#4895ff] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Daily Goal</p>
          <p className="text-5xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
             {Math.round(totalOz)} <span className="text-xl">oz</span>
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4 pt-4 border-t-[3px] border-black text-black sm:grid-cols-2">
             <div>
               <p className="text-xs font-bold uppercase tracking-wider">In Liters</p>
               <p className="text-xl font-bold">{liters.toFixed(1)} L</p>
             </div>
             <div>
               <p className="text-xs font-bold uppercase tracking-wider">In Cups</p>
               <p className="text-xl font-bold">{Math.round(cups)} cups</p>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
