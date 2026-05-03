"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function EmergencyFundCalculator() {
  const [monthlyExpense, setMonthlyExpense] = useState<number | "">(3000);
  const [months, setMonths] = useState<number>(6);

  const target = (Number(monthlyExpense) || 0) * months;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#fef3c7] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Emergency Fund Planner
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Build a safety net for unexpected expenses.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monthly-expense">Monthly Expenses</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="monthly-expense"
                type="number"
                className="pl-7 text-lg"
                value={monthlyExpense}
                onChange={(e) =>
                  setMonthlyExpense(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="months">Months of Coverage</Label>
              <span className="text-sm font-semibold text-black">
                {months} months
              </span>
            </div>
            <input
              id="months"
              type="range"
              min="1"
              max="12"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-[#ff6e50]"
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#d4f5ff] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold text-black uppercase tracking-[0.18em] mb-2">
            Emergency fund goal
          </p>
          <p className="text-5xl font-black tracking-tight">
            ${target.toLocaleString()}
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Save this amount to cover {months} months of living costs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
