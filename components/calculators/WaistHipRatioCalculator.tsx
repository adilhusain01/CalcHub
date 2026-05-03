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

export function WaistHipRatioCalculator() {
  const [waist, setWaist] = useState<number | "">(32);
  const [hip, setHip] = useState<number | "">(40);

  const ratio = (Number(waist) || 0) / Math.max(Number(hip) || 1, 1);
  const classification =
    ratio <= 0.85 ? "Healthy" : ratio <= 0.9 ? "Moderate risk" : "High risk";

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e8ff] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Waist-to-Hip Ratio
        </CardTitle>
        <CardDescription className="text-black font-bold">
          A simple body shape health risk check.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="waist">Waist Circumference</Label>
              <div className="relative">
                <Input
                  id="waist"
                  type="number"
                  className="text-lg"
                  value={waist}
                  onChange={(e) =>
                    setWaist(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  in
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hip">Hip Circumference</Label>
              <div className="relative">
                <Input
                  id="hip"
                  type="number"
                  className="text-lg"
                  value={hip}
                  onChange={(e) =>
                    setHip(e.target.value === "" ? "" : Number(e.target.value))
                  }
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  in
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fff5e5] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Health ratio
          </p>
          <p className="text-5xl font-black tracking-tight">
            {ratio.toFixed(2)}
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Risk classification:{" "}
            <span className="font-bold">{classification}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
