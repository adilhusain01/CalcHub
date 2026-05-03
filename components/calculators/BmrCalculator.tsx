"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function BmrCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number | ''>(30);
  const [weight, setWeight] = useState<number | ''>(70); // kg
  const [height, setHeight] = useState<number | ''>(175); // cm

  const calculateBMR = () => {
    if (!age || !weight || !height) return null;
    
    // Mifflin-St Jeor Equation
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    
    return Math.round(bmr);
  };

  const bmr = calculateBMR();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">BMR Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate your Basal Metabolic Rate (calories burned at rest).</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="font-bold">Biological Sex</Label>
            <div className="flex gap-2">
              <button 
                onClick={() => setGender('male')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${gender === 'male' ? 'bg-blue-500 text-white border-blue-600' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Male
              </button>
              <button 
                onClick={() => setGender('female')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${gender === 'female' ? 'bg-pink-500 text-white border-pink-600' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Female
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="font-bold">Age (Years)</Label>
            <Input 
              id="age" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={age} 
              onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="weight" className="font-bold">Weight (kg)</Label>
              <Input 
                id="weight" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={weight} 
                onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="height" className="font-bold">Height (cm)</Label>
              <Input 
                id="height" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={height} 
                onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {bmr && (
          <div className="mt-6">
            <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Your BMR is</p>
              <p className="text-5xl font-black text-black">{bmr}</p>
              <p className="text-sm text-purple-700 mt-2 font-bold">Calories / Day</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">This is how many calories you burn if you do absolutely nothing all day.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
