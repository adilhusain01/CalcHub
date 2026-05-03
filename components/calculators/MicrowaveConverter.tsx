"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function MicrowaveConverter() {
  const [instructionWattage, setInstructionWattage] = useState<number | ''>(1000);
  const [instructionMins, setInstructionMins] = useState<number | ''>(2);
  const [instructionSecs, setInstructionSecs] = useState<number | ''>(30);
  const [myWattage, setMyWattage] = useState<number | ''>(700);

  const totalOriginalSeconds = (Number(instructionMins) || 0) * 60 + (Number(instructionSecs) || 0);
  
  // Power ratio: instruction_watts / my_watts
  const factor = (Number(instructionWattage) || 1000) / Math.max(1, (Number(myWattage) || 700));
  const myTotalSeconds = Math.round(totalOriginalSeconds * factor);

  const newMins = Math.floor(myTotalSeconds / 60);
  const newSecs = myTotalSeconds % 60;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#ffb347] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Microwave Converter</CardTitle>
        <CardDescription className="text-black font-bold">Fix instructions meant for a different microwave wattage.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="p-4 border-[3px] border-black rounded-[16px] bg-[#f9f9f9] shadow-[4px_4px_0_0_#000]">
          <h3 className="font-black text-xl mb-4">Box Instructions</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2"><Label>Wattage (W)</Label><Input type="number" value={instructionWattage} onChange={e => setInstructionWattage(e.target.value === '' ? '' : Number(e.target.value))} /></div>
            <div className="space-y-2"><Label>Minutes</Label><Input type="number" value={instructionMins} onChange={e => setInstructionMins(e.target.value === '' ? '' : Number(e.target.value))} /></div>
            <div className="space-y-2"><Label>Seconds</Label><Input type="number" value={instructionSecs} onChange={e => setInstructionSecs(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          </div>
        </div>

        <div className="space-y-2 max-w-xs mx-auto mt-4">
          <Label className="text-center block text-lg font-black">Your Microwave Wattage</Label>
          <Input className="text-center text-xl font-black" type="number" value={myWattage} onChange={e => setMyWattage(e.target.value === '' ? '' : Number(e.target.value))} />
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#4a8eff] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">You Should Cook For</p>
          <p className="text-5xl font-black text-white">{newMins}:{newSecs.toString().padStart(2, '0')}</p>
        </div>
      </CardContent>
    </Card>
  );
}
