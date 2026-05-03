"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function BudgetPlannerCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number | ''>(5000);

  const calculateBudget = () => {
    if (!monthlyIncome) return null;
    
    // 50/30/20 Rule
    return {
      needs: monthlyIncome * 0.50,
      wants: monthlyIncome * 0.30,
      savings: monthlyIncome * 0.20
    };
  };

  const budget = calculateBudget();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">50/30/20 Budget Planner</CardTitle>
        <CardDescription className="text-black font-bold">Automatically split your income into needs, wants, and savings.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monthlyIncome" className="font-bold">Monthly After-Tax Income ($)</Label>
            <Input 
              id="monthlyIncome" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={monthlyIncome} 
              onChange={(e) => setMonthlyIncome(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {budget && (
          <div className="space-y-4 mt-6">
            <div className="bg-[#4a8eff] p-5 rounded-2xl border-[3px] border-black flex justify-between items-center shadow-[4px_4px_0_0_#000]">
              <div>
                <p className="text-black font-black text-lg">Needs (50%)</p>
                <p className="text-blue-700 text-sm font-medium">Housing, bills, groceries</p>
              </div>
              <p className="text-2xl font-black text-black">
                ${budget.needs.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </p>
            </div>
            
            <div className="bg-[#ff6e50] p-5 rounded-2xl border-[3px] border-black flex justify-between items-center shadow-[4px_4px_0_0_#000]">
              <div>
                <p className="text-black font-black text-lg">Wants (30%)</p>
                <p className="text-orange-700 text-sm font-medium">Dining out, entertainment</p>
              </div>
              <p className="text-2xl font-black text-black">
                ${budget.wants.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </p>
            </div>

            <div className="bg-[#9ed8a0] p-5 rounded-2xl border-[3px] border-black flex justify-between items-center shadow-[4px_4px_0_0_#000]">
              <div>
                <p className="text-black font-black text-lg">Savings (20%)</p>
                <p className="text-green-700 text-sm font-medium">Investments, debt payoff</p>
              </div>
              <p className="text-2xl font-black text-black">
                ${budget.savings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
