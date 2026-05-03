"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';

export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // could play a sound here
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: 'work' | 'break') => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Pomodoro Timer</CardTitle>
        <CardDescription>Boost productivity with 25/5 intervals.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="flex gap-4">
           <Button 
             variant={mode === 'work' ? 'default' : 'outline'} 
             className="flex-1"
             onClick={() => switchMode('work')}
           >
             Work (25m)
           </Button>
           <Button 
             variant={mode === 'break' ? 'secondary' : 'outline'} 
             className="flex-1"
             onClick={() => switchMode('break')}
           >
             Break (5m)
           </Button>
        </div>

        <div className={`rounded-[16px] border-[3px] border-black p-8 text-center shadow-[4px_4px_0_0_#000] ${mode === 'work' ? 'bg-[#ff6e50]' : 'bg-[#9ed8a0]'}`}>
           <p className="text-sm font-extrabold uppercase tracking-wider mb-2 text-black">
             {mode === 'work' ? 'Focus Session' : 'Relax & Recharge'}
           </p>
           <div className="text-8xl font-black text-white" style={{textShadow: '4px 4px 0 #000'}}>
             {minutes}:{seconds}
           </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={toggleTimer} className="flex-1" variant={isActive ? 'danger' : 'success'}>
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button onClick={resetTimer} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}
