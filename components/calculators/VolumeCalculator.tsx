"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function VolumeCalculator() {
  const [shape, setShape] = useState<'cube' | 'sphere' | 'cylinder'>('cube');
  
  // Cube
  const [side, setSide] = useState<number | ''>(5);
  
  // Sphere
  const [radius, setRadius] = useState<number | ''>(5);
  
  // Cylinder
  const [cylRadius, setCylRadius] = useState<number | ''>(5);
  const [height, setHeight] = useState<number | ''>(10);

  const calculateVolume = () => {
    if (shape === 'cube') {
      if (side === '') return null;
      return Math.pow(side, 3);
    } else if (shape === 'sphere') {
      if (radius === '') return null;
      return (4/3) * Math.PI * Math.pow(radius, 3);
    } else if (shape === 'cylinder') {
      if (cylRadius === '' || height === '') return null;
      return Math.PI * Math.pow(cylRadius, 2) * height;
    }
    return null;
  };

  const volume = calculateVolume();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Volume Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate the volume of common 3D shapes.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="font-bold">Select Shape</Label>
            <div className="flex gap-2">
              <button 
                onClick={() => setShape('cube')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${shape === 'cube' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Cube
              </button>
              <button 
                onClick={() => setShape('sphere')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${shape === 'sphere' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Sphere
              </button>
              <button 
                onClick={() => setShape('cylinder')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${shape === 'cylinder' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Cylinder
              </button>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 border-[3px] border-black rounded-xl space-y-4">
            {shape === 'cube' && (
              <div className="space-y-2">
                <Label htmlFor="side" className="font-bold">Side Length</Label>
                <Input id="side" type="number" className="border-2 border-black rounded-xl" value={side} onChange={(e) => setSide(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
            )}
            
            {shape === 'sphere' && (
              <div className="space-y-2">
                <Label htmlFor="radius" className="font-bold">Radius</Label>
                <Input id="radius" type="number" className="border-2 border-black rounded-xl" value={radius} onChange={(e) => setRadius(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
            )}

            {shape === 'cylinder' && (
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="cylRadius" className="font-bold">Radius</Label>
                  <Input id="cylRadius" type="number" className="border-2 border-black rounded-xl" value={cylRadius} onChange={(e) => setCylRadius(e.target.value === '' ? '' : Number(e.target.value))} />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="height" className="font-bold">Height</Label>
                  <Input id="height" type="number" className="border-2 border-black rounded-xl" value={height} onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))} />
                </div>
              </div>
            )}
          </div>
        </div>

        {volume !== null && (
          <div className="mt-6">
            <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Total Volume</p>
              <p className="text-5xl font-black text-black">{volume % 1 === 0 ? volume : volume.toFixed(4)}</p>
              <p className="text-sm text-purple-700 mt-2 font-bold">Cubic units</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
