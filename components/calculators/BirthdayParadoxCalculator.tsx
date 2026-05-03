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

export function BirthdayParadoxCalculator() {
  const [people, setPeople] = useState<number | "">(23);

  const count = Number(people) || 0;
  const probability =
    count <= 1
      ? 0
      : 1 -
        Array.from({ length: count }, (_, i) => (365 - i) / 365).reduce(
          (acc, next) => acc * next,
          1,
        );

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#fff4e5] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Birthday Paradox</CardTitle>
        <CardDescription className="text-black font-bold">
          See how likely shared birthdays are in a group.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="people">Number of People</Label>
            <Input
              id="people"
              type="number"
              className="text-lg"
              value={people}
              onChange={(e) =>
                setPeople(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#e7f5ff] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Probability
          </p>
          <p className="text-5xl font-black tracking-tight">
            {(probability * 100).toFixed(1)}%
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            There is a {probability.toFixed(3)} chance at least two people share
            a birthday.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
