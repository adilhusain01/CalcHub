"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleResetLap = () => {
    if (isRunning) {
      setLaps([time, ...laps]);
    } else {
      setTime(0);
      setLaps([]);
    }
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Stopwatch</CardTitle>
        <CardDescription className="text-black font-bold">A precise stopwatch with lap functionality.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="bg-gray-100 p-8 rounded-2xl border-4 border-black text-center shadow-inner">
          <p className="text-6xl md:text-8xl font-black font-mono tracking-wider">{formatTime(time)}</p>
        </div>

        <div className="flex gap-4 justify-center">
          <button 
            onClick={handleStartStop}
            className={`flex-1 py-4 text-xl font-black rounded-xl border-4 border-black transition-transform active:scale-95 ${isRunning ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'}`}
          >
            {isRunning ? 'STOP' : 'START'}
          </button>
          <button 
            onClick={handleResetLap}
            className="flex-1 py-4 text-xl font-black bg-gray-200 text-black rounded-xl border-4 border-black hover:bg-gray-300 transition-transform active:scale-95"
          >
            {isRunning ? 'LAP' : 'RESET'}
          </button>
        </div>

        {laps.length > 0 && (
          <div className="mt-8 space-y-2 border-t-2 border-gray-200 pt-6">
            <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-4">Laps</p>
            <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
              {laps.map((lapTime, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-[3px] border-black">
                  <span className="font-bold text-gray-500">Lap {laps.length - index}</span>
                  <span className="font-mono font-bold text-lg">{formatTime(lapTime)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
