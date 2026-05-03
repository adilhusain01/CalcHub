"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function BingeWatchCalculator() {
  const [seasons, setSeasons] = useState<number | ''>(5);
  const [episodesPerSeason, setEpisodesPerSeason] = useState<number | ''>(10);
  const [episodeLength, setEpisodeLength] = useState<number | ''>(45); // mins

  const totalEpisodes = (Number(seasons) || 0) * (Number(episodesPerSeason) || 0);
  const totalMins = totalEpisodes * (Number(episodeLength) || 0);
  
  const days = Math.floor(totalMins / 1440);
  const hours = Math.floor((totalMins % 1440) / 60);
  const mins = totalMins % 60;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#ff6e50] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Binge-Watch Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Find out how much of your life you're about to lose.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2"><Label>Seasons</Label><Input type="number" value={seasons} onChange={e => setSeasons(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          <div className="space-y-2"><Label>Episodes/Season</Label><Input type="number" value={episodesPerSeason} onChange={e => setEpisodesPerSeason(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          <div className="space-y-2"><Label>Length (mins)</Label><Input type="number" value={episodeLength} onChange={e => setEpisodeLength(e.target.value === '' ? '' : Number(e.target.value))} /></div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#f3e5ca] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Total Binge Time</p>
          <div className="flex justify-center items-end gap-2 text-3xl font-black text-black">
            {days > 0 && <span>{days}d</span>}
            {(hours > 0 || days > 0) && <span>{hours}h</span>}
            <span>{mins}m</span>
          </div>
          <p className="mt-2 font-bold text-sm">That's {totalEpisodes} episodes total.</p>
        </div>
      </CardContent>
    </Card>
  );
}
