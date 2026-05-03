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

export function InventoryTurnoverCalculator() {
  const [cogs, setCogs] = useState<number | "">(120000);
  const [avgInventory, setAvgInventory] = useState<number | "">(30000);

  const turnover = (Number(cogs) || 0) / Math.max(Number(avgInventory) || 1, 1);
  const daysOnHand = turnover ? 365 / turnover : 0;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#e8f9f7] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Inventory Turnover
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Measure how fast stock moves through your business.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cogs">Cost of Goods Sold</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="cogs"
                type="number"
                className="pl-7 text-lg"
                value={cogs}
                onChange={(e) =>
                  setCogs(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="avg-inventory">Average Inventory Value</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="avg-inventory"
                type="number"
                className="pl-7 text-lg"
                value={avgInventory}
                onChange={(e) =>
                  setAvgInventory(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fff8e1] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Inventory health
          </p>
          <p className="text-5xl font-black tracking-tight">
            {turnover.toFixed(2)}x
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Average time in stock:{" "}
            <span className="font-bold">{daysOnHand.toFixed(0)} days</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
