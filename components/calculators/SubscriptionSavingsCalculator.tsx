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

export function SubscriptionSavingsCalculator() {
  const [monthlyCost, setMonthlyCost] = useState<number | "">(12.99);
  const [annualCost, setAnnualCost] = useState<number | "">(99.99);

  const yearlyMonthly = (Number(monthlyCost) || 0) * 12;
  const savings = yearlyMonthly - (Number(annualCost) || 0);

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#effcf6] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Subscription Savings
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Compare monthly and annual plans instantly.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="monthly-cost">Monthly price</Label>
            <Input
              id="monthly-cost"
              type="number"
              className="text-lg"
              value={monthlyCost}
              onChange={(e) =>
                setMonthlyCost(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annual-cost">Annual price</Label>
            <Input
              id="annual-cost"
              type="number"
              className="text-lg"
              value={annualCost}
              onChange={(e) =>
                setAnnualCost(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fff1eb] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Annual savings
          </p>
          <p className="text-5xl font-black tracking-tight">
            ${savings.toFixed(2)}
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Paying annually saves you ${savings.toFixed(2)} compared to monthly
            billing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
