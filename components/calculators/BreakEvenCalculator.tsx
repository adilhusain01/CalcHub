"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState<number | ''>(5000);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState<number | ''>(10);
  const [pricePerUnit, setPricePerUnit] = useState<number | ''>(25);

  const calculateBreakEven = () => {
    if (!fixedCosts || !variableCostPerUnit || !pricePerUnit) return null;
    
    const contributionMargin = pricePerUnit - variableCostPerUnit;
    
    if (contributionMargin <= 0) {
      return { impossible: true };
    }
    
    const units = Math.ceil(fixedCosts / contributionMargin);
    const revenue = units * pricePerUnit;
    
    return {
      impossible: false,
      units,
      revenue,
      contributionMargin
    };
  };

  const result = calculateBreakEven();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Break-Even Analysis</CardTitle>
        <CardDescription className="text-black font-bold">Find the point where your business revenue equals its costs.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fixedCosts" className="font-bold">Total Fixed Costs ($)</Label>
            <Input 
              id="fixedCosts" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={fixedCosts} 
              onChange={(e) => setFixedCosts(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="variableCostPerUnit" className="font-bold">Variable Cost per Unit ($)</Label>
              <Input 
                id="variableCostPerUnit" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={variableCostPerUnit} 
                onChange={(e) => setVariableCostPerUnit(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="pricePerUnit" className="font-bold">Selling Price per Unit ($)</Label>
              <Input 
                id="pricePerUnit" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={pricePerUnit} 
                onChange={(e) => setPricePerUnit(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            {result.impossible ? (
              <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-1">Impossible to Break Even</p>
                <p className="text-lg font-bold text-black mt-2">Your variable costs exceed or equal your selling price.</p>
              </div>
            ) : (
              <>
                <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                  <p className="text-black font-bold text-sm mb-1">Break-Even Point (Units)</p>
                  <p className="text-5xl font-black text-black">{(result.units as number).toLocaleString()}</p>
                  <p className="text-sm text-green-700 mt-2 font-bold">You need to sell {(result.units as number).toLocaleString()} units to cover all costs.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border-[3px] border-black text-center">
                    <p className="font-bold text-black">Break-Even Revenue</p>
                    <p className="text-2xl font-black text-black">${(result.revenue as number).toLocaleString()}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl border-[3px] border-black text-center">
                    <p className="font-bold text-black">Contribution Margin</p>
                    <p className="text-2xl font-black text-black">${(result.contributionMargin as number).toFixed(2)} / unit</p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
