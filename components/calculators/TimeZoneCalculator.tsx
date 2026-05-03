"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function TimeZoneCalculator() {
  const [time, setTime] = useState<string>('12:00');
  const [sourceTz, setSourceTz] = useState<number>(0);
  const [targetTz, setTargetTz] = useState<number>(-5); // EST

  const timezones = [
    { name: "GMT/UTC", offset: 0 },
    { name: "EST (New York)", offset: -5 },
    { name: "CST (Chicago)", offset: -6 },
    { name: "PST (Los Angeles)", offset: -8 },
    { name: "CET (Paris)", offset: 1 },
    { name: "IST (India)", offset: 5.5 },
    { name: "JST (Tokyo)", offset: 9 },
    { name: "AEST (Sydney)", offset: 10 }
  ];

  const calculateTime = () => {
    if (!time) return null;
    
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setUTCHours(hours - sourceTz);
    date.setUTCMinutes(minutes - (sourceTz % 1) * 60);
    
    // Now convert to target TZ
    const targetHours = date.getUTCHours() + Math.floor(targetTz);
    const targetMinutes = date.getUTCMinutes() + (targetTz % 1) * 60;
    
    date.setUTCHours(targetHours);
    date.setUTCMinutes(targetMinutes);
    
    return date.toISOString().substr(11, 5); // Extract HH:MM
  };

  const convertedTime = calculateTime();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Time Zone Converter</CardTitle>
        <CardDescription className="text-black font-bold">Quickly convert times across different global zones.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="time" className="font-bold">Time</Label>
            <Input 
              id="time" 
              type="time" 
              className="border-2 border-black rounded-xl p-4 text-xl font-bold w-full max-w-[200px]"
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sourceTz" className="font-bold">From Time Zone</Label>
              <select 
                id="sourceTz"
                className="w-full border-2 border-black rounded-xl p-4 font-bold bg-white"
                value={sourceTz}
                onChange={(e) => setSourceTz(Number(e.target.value))}
              >
                {timezones.map(tz => (
                  <option key={tz.name} value={tz.offset}>{tz.name} (UTC{tz.offset >= 0 ? '+' : ''}{tz.offset})</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="targetTz" className="font-bold">To Time Zone</Label>
              <select 
                id="targetTz"
                className="w-full border-2 border-black rounded-xl p-4 font-bold bg-white"
                value={targetTz}
                onChange={(e) => setTargetTz(Number(e.target.value))}
              >
                {timezones.map(tz => (
                  <option key={tz.name} value={tz.offset}>{tz.name} (UTC{tz.offset >= 0 ? '+' : ''}{tz.offset})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {convertedTime && (
          <div className="mt-8">
            <div className="bg-[#4a8eff] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000] relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-6xl opacity-20">🌍</div>
              <p className="text-black font-bold text-sm mb-2 uppercase tracking-wide">Converted Time</p>
              <p className="text-6xl font-black text-black">{convertedTime}</p>
              <p className="text-sm font-bold text-blue-700 mt-2">
                {timezones.find(t => t.offset === targetTz)?.name}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
