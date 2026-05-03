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

function formatPace(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function RunPaceCalculator() {
  const [distance, setDistance] = useState<number | "">(5);
  const [unit, setUnit] = useState<"miles" | "kilometers">("miles");
  const [hours, setHours] = useState<number | "">(0);
  const [minutes, setMinutes] = useState<number | "">(40);
  const [seconds, setSeconds] = useState<number | "">(0);

  const totalSeconds =
    (Number(hours) || 0) * 3600 +
    (Number(minutes) || 0) * 60 +
    (Number(seconds) || 0);
  const numericDistance = Number(distance) || 0;
  const paceSeconds = numericDistance > 0 ? totalSeconds / numericDistance : 0;
  const paceLabel = unit === "miles" ? "per mile" : "per km";

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#e0f2fe] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Running Pace Calculator
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Convert your race time into pace per mile or kilometer.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="distance">Distance</Label>
            <div className="flex gap-3">
              <Input
                id="distance"
                type="number"
                className="text-lg"
                value={distance}
                onChange={(e) =>
                  setDistance(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
              <select
                className="rounded-xl border-[3px] border-black px-4 py-3 text-lg font-semibold"
                value={unit}
                onChange={(e) =>
                  setUnit(e.target.value as "miles" | "kilometers")
                }
              >
                <option value="miles">Miles</option>
                <option value="kilometers">Kilometers</option>
              </select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="hours">Hours</Label>
              <Input
                id="hours"
                type="number"
                className="text-lg"
                value={hours}
                onChange={(e) =>
                  setHours(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minutes">Minutes</Label>
              <Input
                id="minutes"
                type="number"
                className="text-lg"
                value={minutes}
                onChange={(e) =>
                  setMinutes(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seconds">Seconds</Label>
              <Input
                id="seconds"
                type="number"
                className="text-lg"
                value={seconds}
                onChange={(e) =>
                  setSeconds(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fef3c7] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Your pace
          </p>
          <p className="text-5xl font-black tracking-tight">
            {formatPace(paceSeconds)} {paceLabel}
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Based on {distance || 0} {unit} and your finish time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
