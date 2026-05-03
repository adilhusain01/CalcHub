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

export function InvestmentFeeCalculator() {
  const [principal, setPrincipal] = useState<number | "">(10000);
  const [annualReturn, setAnnualReturn] = useState<number>(7);
  const [feePercent, setFeePercent] = useState<number>(1);
  const [years, setYears] = useState<number>(10);

  const grossValue =
    (Number(principal) || 0) * Math.pow(1 + annualReturn / 100, years);
  const netValue =
    (Number(principal) || 0) *
    Math.pow(1 + (annualReturn - feePercent) / 100, years);
  const feeCost = grossValue - netValue;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f5f3ff] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Investment Fee Saver
        </CardTitle>
        <CardDescription className="text-black font-bold">
          See how fees affect your long-term returns.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Investment</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="principal"
                type="number"
                className="pl-7 text-lg"
                value={principal}
                onChange={(e) =>
                  setPrincipal(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="annual-return">Expected Annual Return</Label>
              <Input
                id="annual-return"
                type="number"
                className="text-lg"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fee-percent">Annual Fee %</Label>
              <Input
                id="fee-percent"
                type="number"
                className="text-lg"
                value={feePercent}
                onChange={(e) => setFeePercent(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="years">Investment Horizon (Years)</Label>
            <Input
              id="years"
              type="number"
              className="text-lg"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fff1f0] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Fee impact
          </p>
          <p className="text-3xl font-black tracking-tight">
            ${feeCost.toFixed(0)}
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            That’s the estimated amount you lose to fees over {years} years.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 border border-black">
              <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
                Gross value
              </p>
              <p className="text-xl font-black mt-2">
                ${grossValue.toFixed(0)}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-black">
              <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
                Net value
              </p>
              <p className="text-xl font-black mt-2">${netValue.toFixed(0)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
