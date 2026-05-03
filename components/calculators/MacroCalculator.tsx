"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function MacroCalculator() {
  const [calories, setCalories] = useState<number | ''>(2000);
  const [goal, setGoal] = useState<'maintenance' | 'cutting' | 'bulking'>('maintenance');

  const calculateMacros = () => {
    if (!calories) return null;

    let pPercent, cPercent, fPercent;

    if (goal === 'cutting') {
      pPercent = 0.40;
      cPercent = 0.30;
      fPercent = 0.30;
    } else if (goal === 'bulking') {
      pPercent = 0.30;
      cPercent = 0.50;
      fPercent = 0.20;
    } else { // maintenance
      pPercent = 0.30;
      cPercent = 0.40;
      fPercent = 0.30;
    }

    const proteinCalories = calories * pPercent;
    const carbCalories = calories * cPercent;
    const fatCalories = calories * fPercent;

    return {
      protein: Math.round(proteinCalories / 4), // 4 calories per gram
      carbs: Math.round(carbCalories / 4), // 4 calories per gram
      fat: Math.round(fatCalories / 9) // 9 calories per gram
    };
  };

  const macros = calculateMacros();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Macro Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Find your ideal daily protein, carb, and fat targets.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="calories" className="font-bold">Daily Calorie Target</Label>
            <Input 
              id="calories" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={calories} 
              onChange={(e) => setCalories(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>

          <div className="space-y-2">
            <Label className="font-bold">Primary Goal</Label>
            <div className="flex gap-2">
              <button 
                onClick={() => setGoal('cutting')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${goal === 'cutting' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Cutting
              </button>
              <button 
                onClick={() => setGoal('maintenance')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${goal === 'maintenance' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Maintain
              </button>
              <button 
                onClick={() => setGoal('bulking')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${goal === 'bulking' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Bulking
              </button>
            </div>
          </div>
        </div>

        {macros && (
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#ff94e0] p-4 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Protein</p>
              <p className="text-3xl font-black text-black">{macros.protein}g</p>
            </div>
            
            <div className="bg-[#ff6e50] p-4 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Carbs</p>
              <p className="text-3xl font-black text-black">{macros.carbs}g</p>
            </div>

            <div className="bg-[#ffd043] p-4 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Fat</p>
              <p className="text-3xl font-black text-black">{macros.fat}g</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
