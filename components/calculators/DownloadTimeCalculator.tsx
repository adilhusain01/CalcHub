"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function DownloadTimeCalculator() {
  const [fileSize, setFileSize] = useState<number | ''>(50);
  const [sizeUnit, setSizeUnit] = useState<string>('GB');
  const [speed, setSpeed] = useState<number | ''>(100);
  const [speedUnit, setSpeedUnit] = useState<string>('Mbps');

  const calculateTime = () => {
    let sizeInBits = (Number(fileSize) || 0) * 8;
    if (sizeUnit === 'GB') sizeInBits *= 1024 * 1024 * 1024;
    else if (sizeUnit === 'MB') sizeInBits *= 1024 * 1024;
    else if (sizeUnit === 'TB') sizeInBits *= 1024 * 1024 * 1024 * 1024;

    let speedInBitsPerSec = Number(speed) || 0;
    if (speedUnit === 'Mbps') speedInBitsPerSec *= 1000 * 1000;
    else if (speedUnit === 'Gbps') speedInBitsPerSec *= 1000 * 1000 * 1000;
    else if (speedUnit === 'MBps') speedInBitsPerSec *= 1024 * 1024 * 8;

    if (speedInBitsPerSec === 0) return 0;
    return sizeInBits / speedInBitsPerSec;
  };

  const seconds = calculateTime();
  const d = Math.floor(seconds / (3600*24));
  const h = Math.floor(seconds % (3600*24) / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#9ed8a0] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Download Time</CardTitle>
        <CardDescription className="text-black font-bold">Calculate how long your giant file will take.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>File Size</Label>
            <div className="flex gap-2">
              <Input type="number" value={fileSize} onChange={e => setFileSize(e.target.value === '' ? '' : Number(e.target.value))} />
              <select className="border-[3px] border-black bg-white rounded-xl px-2 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer" value={sizeUnit} onChange={e => setSizeUnit(e.target.value)}>
                <option value="MB">MB</option>
                <option value="GB">GB</option>
                <option value="TB">TB</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Internet Speed</Label>
            <div className="flex gap-2">
              <Input type="number" value={speed} onChange={e => setSpeed(e.target.value === '' ? '' : Number(e.target.value))} />
              <select className="border-[3px] border-black bg-white rounded-xl px-2 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer" value={speedUnit} onChange={e => setSpeedUnit(e.target.value)}>
                <option value="Mbps">Mbps</option>
                <option value="MBps">MB/s</option>
                <option value="Gbps">Gbps</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-white p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Estimated Time</p>
          <div className="flex justify-center items-end gap-2 text-3xl font-black text-black">
            {d > 0 && <span>{d}d</span>}
            {(h > 0 || d > 0) && <span>{h}h</span>}
            {(m > 0 || h > 0 || d > 0) && <span>{m}m</span>}
            <span>{s}s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
