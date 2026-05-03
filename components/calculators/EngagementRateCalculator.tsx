"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function EngagementRateCalculator() {
  const [followers, setFollowers] = useState<number | ''>(5000);
  const [likes, setLikes] = useState<number | ''>(250);
  const [comments, setComments] = useState<number | ''>(30);
  const [shares, setShares] = useState<number | ''>(10);

  const totalEngagements = (Number(likes) || 0) + (Number(comments) || 0) + (Number(shares) || 0);
  const rate = (Number(followers) || 0) > 0 ? (totalEngagements / Number(followers)) * 100 : 0;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#fbbf24] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-black">Engagement Rate</CardTitle>
        <CardDescription className="text-black font-bold">Calculate engagement % for Instagram, TikTok, or Twitter.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 col-span-2">
            <Label>Total Followers</Label>
            <Input type="number" value={followers} onChange={e => setFollowers(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Likes</Label>
            <Input type="number" value={likes} onChange={e => setLikes(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Comments</Label>
            <Input type="number" value={comments} onChange={e => setComments(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2 col-span-2">
            <Label>Shares / Saves (Optional)</Label>
            <Input type="number" value={shares} onChange={e => setShares(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-white p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Engagement Rate</p>
          <p className="text-5xl font-black text-black">{rate.toFixed(2)}%</p>
          <p className="mt-2 text-sm font-bold">1-5% is considered a good average rate.</p>
        </div>
      </CardContent>
    </Card>
  );
}
