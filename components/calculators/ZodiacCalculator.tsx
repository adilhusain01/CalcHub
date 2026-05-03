"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function ZodiacCalculator() {
  const [birthDate, setBirthDate] = useState<string>('');

  const getZodiacSign = () => {
    if (!birthDate) return null;
    
    const date = new Date(birthDate);
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { sign: "Aries", emoji: "♈" };
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { sign: "Taurus", emoji: "♉" };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return { sign: "Gemini", emoji: "♊" };
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return { sign: "Cancer", emoji: "♋" };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: "Leo", emoji: "♌" };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: "Virgo", emoji: "♍" };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return { sign: "Libra", emoji: "♎" };
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return { sign: "Scorpio", emoji: "♏" };
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { sign: "Sagittarius", emoji: "♐" };
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { sign: "Capricorn", emoji: "♑" };
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { sign: "Aquarius", emoji: "♒" };
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return { sign: "Pisces", emoji: "♓" };
    
    return null;
  };

  const zodiac = getZodiacSign();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Zodiac Sign Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Discover your astrological sign based on your birthday.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <Label htmlFor="birthDate" className="font-bold text-lg">When is your birthday?</Label>
            <Input 
              id="birthDate" 
              type="date" 
              className="border-2 border-black rounded-xl text-lg p-6 w-full max-w-sm mx-auto"
              value={birthDate} 
              onChange={(e) => setBirthDate(e.target.value)} 
            />
          </div>
        </div>

        {zodiac && (
          <div className="mt-8">
            <div className="bg-[#ff94e0] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-2 uppercase tracking-widest">Your Sign</p>
              <p className="text-7xl mb-4">{zodiac.emoji}</p>
              <p className="text-5xl font-black text-black">{zodiac.sign}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
