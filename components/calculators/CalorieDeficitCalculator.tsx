"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function CalorieDeficitCalculator() {
  const [age, setAge] = useState<number | ''>(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<number | ''>(80);
  const [height, setHeight] = useState<number | ''>(175);
  const [activity, setActivity] = useState<number>(1.2);
  const [deficit, setDeficit] = useState<number | ''>(500);

  const calculate = () => {
    const a = Number(age) || 0;
    const w = Number(weight) || 0;
    const h = Number(height) || 0;
    
    // Mifflin-St Jeor
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += gender === 'male' ? 5 : -161;
    
    const tdee = bmr * activity;
    const d = Number(deficit) || 0;
    const target = tdee - d;

    return { tdee, target };
  };

  const results = calculate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Calorie Deficit Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate daily calories to reach your goal.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          <Button className="flex-1 rounded-md" variant={gender === 'male' ? 'default' : 'ghost'} onClick={() => setGender('male')}>Male</Button>
          <Button className="flex-1 rounded-md" variant={gender === 'female' ? 'default' : 'ghost'} onClick={() => setGender('female')}>Female</Button>
        </div>

        <div className="flex gap-4">
          <div className="space-y-2 flex-1">
            <Label>Age (years)</Label>
            <Input type="number" value={age} onChange={e => setAge(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2 flex-1">
            <Label>Weight (kg)</Label>
            <Input type="number" value={weight} onChange={e => setWeight(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2 flex-1">
            <Label>Height (cm)</Label>
            <Input type="number" value={height} onChange={e => setHeight(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Activity Level</Label>
          <select 
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
          >
            <option value="1.2">Sedentary (desk job)</option>
            <option value="1.375">Light Exercise (1-3 days/wk)</option>
            <option value="1.55">Moderate Exercise (3-5 days/wk)</option>
            <option value="1.725">Heavy Exercise (6-7 days/wk)</option>
            <option value="1.9">Athlete (2x per day)</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label>Target Daily Deficit (calories)</Label>
          <Input type="number" value={deficit} onChange={(e) => setDeficit(e.target.value === '' ? '' : Number(e.target.value))} />
          <p className="text-xs text-gray-500">500 cal/day â 1lb/week loss</p>
        </div>

        <div className="rounded-xl  bg-[#ffd043]  p-6 text-black text-center mt-6  shadow-[4px_4px_0_0_#000] border-[3px] border-black  text-black">
          <p className="text-black opacity-80 font-bold text-sm font-medium mb-1">Target Daily Calories</p>
          <p className="text-4xl font-bold tracking-tight">
            {Math.round(results.target)} <span className="text-lg font-normal text-black opacity-80 font-bold">kcal</span>
          </p>
          <p className="text-sm text-black opacity-80 font-bold mt-2 pt-2 border-t border-orange-400">
            Maintenance (TDEE): {Math.round(results.tdee)} kcal
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
