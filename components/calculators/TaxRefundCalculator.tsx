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

const bracketRates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

export function TaxRefundCalculator() {
  const [income, setIncome] = useState<number | "">(65000);
  const [withheld, setWithheld] = useState<number | "">(8000);
  const [deductions, setDeductions] = useState<number | "">(13000);
  const [taxRateIndex, setTaxRateIndex] = useState<number>(2);

  const taxableIncome = Math.max(
    0,
    (Number(income) || 0) - (Number(deductions) || 0),
  );
  const estimatedTax = taxableIncome * bracketRates[taxRateIndex];
  const refund = (Number(withheld) || 0) - estimatedTax;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#e8f5e9] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Tax Refund Estimator
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Estimate whether you’ll get a refund or owe taxes.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="income"
                type="number"
                className="pl-7 text-lg"
                value={income}
                onChange={(e) =>
                  setIncome(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="withheld">Tax Withheld</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="withheld"
                type="number"
                className="pl-7 text-lg"
                value={withheld}
                onChange={(e) =>
                  setWithheld(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="deductions">Deductions / Credits</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="deductions"
                type="number"
                className="pl-7 text-lg"
                value={deductions}
                onChange={(e) =>
                  setDeductions(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tax-rate">Estimated Tax Rate</Label>
            <select
              id="tax-rate"
              className="w-full rounded-xl border-[3px] border-black px-4 py-3 text-lg font-semibold"
              value={taxRateIndex}
              onChange={(e) => setTaxRateIndex(Number(e.target.value))}
            >
              <option value={0}>10%</option>
              <option value={1}>12%</option>
              <option value={2}>22%</option>
              <option value={3}>24%</option>
              <option value={4}>32%</option>
              <option value={5}>35%</option>
              <option value={6}>37%</option>
            </select>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#ffe7f0] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Your estimate
          </p>
          <p className="text-4xl font-black tracking-tight">
            {refund >= 0
              ? "$" + refund.toFixed(0) + " refund"
              : "$" + Math.abs(refund).toFixed(0) + " owed"}
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Estimated tax liability:{" "}
            <span className="font-bold">${estimatedTax.toFixed(0)}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
