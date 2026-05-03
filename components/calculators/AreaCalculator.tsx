"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AreaCalculator() {
  const [shape, setShape] = useState<'rectangle' | 'circle' | 'triangle'>('rectangle');
  
  // Rectangle
  const [length, setLength] = useState<number | ''>(10);
  const [width, setWidth] = useState<number | ''>(5);
  
  // Circle
  const [radius, setRadius] = useState<number | ''>(5);
  
  // Triangle
  const [base, setBase] = useState<number | ''>(10);
  const [height, setHeight] = useState<number | ''>(8);

  const calculateArea = () => {
    if (shape === 'rectangle') {
      if (length === '' || width === '') return null;
      return length * width;
    } else if (shape === 'circle') {
      if (radius === '') return null;
      return Math.PI * Math.pow(radius, 2);
    } else if (shape === 'triangle') {
      if (base === '' || height === '') return null;
      return 0.5 * base * height;
    }
    return null;
  };

  const area = calculateArea();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Area Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate the area of common 2D shapes.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="font-bold">Select Shape</Label>
            <div className="flex gap-2">
              <button 
                onClick={() => setShape('rectangle')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${shape === 'rectangle' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Rectangle
              </button>
              <button 
                onClick={() => setShape('circle')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${shape === 'circle' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Circle
              </button>
              <button 
                onClick={() => setShape('triangle')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${shape === 'triangle' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Triangle
              </button>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 border-[3px] border-black rounded-xl space-y-4">
            {shape === 'rectangle' && (
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="length" className="font-bold">Length</Label>
                  <Input id="length" type="number" className="border-2 border-black rounded-xl" value={length} onChange={(e) => setLength(e.target.value === '' ? '' : Number(e.target.value))} />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="width" className="font-bold">Width</Label>
                  <Input id="width" type="number" className="border-2 border-black rounded-xl" value={width} onChange={(e) => setWidth(e.target.value === '' ? '' : Number(e.target.value))} />
                </div>
              </div>
            )}
            
            {shape === 'circle' && (
              <div className="space-y-2">
                <Label htmlFor="radius" className="font-bold">Radius</Label>
                <Input id="radius" type="number" className="border-2 border-black rounded-xl" value={radius} onChange={(e) => setRadius(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
            )}

            {shape === 'triangle' && (
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="base" className="font-bold">Base</Label>
                  <Input id="base" type="number" className="border-2 border-black rounded-xl" value={base} onChange={(e) => setBase(e.target.value === '' ? '' : Number(e.target.value))} />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="height" className="font-bold">Height</Label>
                  <Input id="height" type="number" className="border-2 border-black rounded-xl" value={height} onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))} />
                </div>
              </div>
            )}
          </div>
        </div>

        {area !== null && (
          <div className="mt-6">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Total Area</p>
              <p className="text-5xl font-black text-black">{area % 1 === 0 ? area : area.toFixed(4)}</p>
              <p className="text-sm text-indigo-700 mt-2 font-bold">Square units</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
