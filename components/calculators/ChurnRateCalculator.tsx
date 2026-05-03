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

export function ChurnRateCalculator() {
  const [startingCustomers, setStartingCustomers] = useState<number | "">(200);
  const [endingCustomers, setEndingCustomers] = useState<number | "">(180);
  const [newCustomers, setNewCustomers] = useState<number | "">(25);

  const lostCustomers = Math.max(
    (Number(startingCustomers) || 0) +
      (Number(newCustomers) || 0) -
      (Number(endingCustomers) || 0),
    0,
  );
  const churn =
    (lostCustomers / Math.max(Number(startingCustomers) || 1, 1)) * 100;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#fce8ff] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Churn Rate Calculator
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Track how many customers leave over time.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="starting-customers">Starting Customers</Label>
            <Input
              id="starting-customers"
              type="number"
              className="text-lg"
              value={startingCustomers}
              onChange={(e) =>
                setStartingCustomers(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-customers">New Customers Added</Label>
            <Input
              id="new-customers"
              type="number"
              className="text-lg"
              value={newCustomers}
              onChange={(e) =>
                setNewCustomers(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ending-customers">Ending Customers</Label>
            <Input
              id="ending-customers"
              type="number"
              className="text-lg"
              value={endingCustomers}
              onChange={(e) =>
                setEndingCustomers(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#e9f5ff] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Monthly churn
          </p>
          <p className="text-5xl font-black tracking-tight">
            {churn.toFixed(1)}%
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Lost customers: <span className="font-bold">{lostCustomers}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
