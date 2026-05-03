"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function BacCalculator() {
  const [weight, setWeight] = useState<number | ''>(160);
  const [gender, setGender] = useState<string>('male');
  const [drinks, setDrinks] = useState<number | ''>(3);
  const [hours, setHours] = useState<number | ''>(2);

  // Widmark formula: BAC = (Drink volume * alcohol % * 5.14) / (Weight * Gender factor) - (0.015 * Hours)
  // Assuming 1 standard drink = 0.6 oz of pure alcohol
  const calculateBac = () => {
    const w = Number(weight) || 160;
    const d = Number(drinks) || 0;
    const h = Number(hours) || 0;
    const r = gender === 'male' ? 0.73 : 0.66;
    
    // 0.6 oz alcohol per drink * 5.14
    let bac = (d * 0.6 * 5.14) / (w * r) - (0.015 * h);
    return Math.max(0, bac);
  };

  const bac = calculateBac();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#8b5cf6] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-white">Blood Alcohol (BAC)</CardTitle>
        <CardDescription className="text-[#e2d5f8] font-bold">Estimate your Blood Alcohol Concentration.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Weight (lbs)</Label>
            <Input type="number" value={weight} onChange={e => setWeight(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Sex</Label>
            <select className="flex h-12 w-full rounded-xl border-[3px] border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0_0_#e5e7eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer" value={gender} onChange={e => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Standard Drinks</Label>
            <Input type="number" value={drinks} onChange={e => setDrinks(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Hours Passed</Label>
            <Input type="number" value={hours} onChange={e => setHours(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#ff6e50] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Estimated BAC</p>
          <p className="text-5xl font-black text-black">{bac.toFixed(3)}%</p>
          <p className="mt-2 font-bold text-sm">Legal driving limit in most places is 0.08%.</p>
        </div>
      </CardContent>
    </Card>
  );
}
