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

export function GroceryPriceComparer() {
  const [priceA, setPriceA] = useState<number | "">(3.99);
  const [quantityA, setQuantityA] = useState<number | "">(16);
  const [priceB, setPriceB] = useState<number | "">(5.49);
  const [quantityB, setQuantityB] = useState<number | "">(24);

  const unitA = (Number(priceA) || 0) / Math.max(Number(quantityA) || 1, 1);
  const unitB = (Number(priceB) || 0) / Math.max(Number(quantityB) || 1, 1);
  const better = unitA < unitB ? "A" : unitB < unitA ? "B" : "Both are equal";

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#eff6ff] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Grocery Price Compare
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Find the better deal at the grocery store.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="price-a">Price A</Label>
              <Input
                id="price-a"
                type="number"
                className="text-lg"
                value={priceA}
                onChange={(e) =>
                  setPriceA(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qty-a">Quantity A</Label>
              <Input
                id="qty-a"
                type="number"
                className="text-lg"
                value={quantityA}
                onChange={(e) =>
                  setQuantityA(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="price-b">Price B</Label>
              <Input
                id="price-b"
                type="number"
                className="text-lg"
                value={priceB}
                onChange={(e) =>
                  setPriceB(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qty-b">Quantity B</Label>
              <Input
                id="qty-b"
                type="number"
                className="text-lg"
                value={quantityB}
                onChange={(e) =>
                  setQuantityB(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fffbe6] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Best value
          </p>
          <p className="text-5xl font-black tracking-tight">
            {better === "Both are equal" ? better : `Option ${better}`}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 border border-black">
              <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
                Unit price A
              </p>
              <p className="text-xl font-black mt-2">${unitA.toFixed(2)}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-black">
              <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
                Unit price B
              </p>
              <p className="text-xl font-black mt-2">${unitB.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
