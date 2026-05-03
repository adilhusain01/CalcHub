"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function MovieMarathonCalculator() {
  const [movies, setMovies] = useState<number | "">(5);
  const [minutesPerMovie, setMinutesPerMovie] = useState<number | "">(120);
  const [breaks, setBreaks] = useState<number | "">(3);
  const [breakMinutes, setBreakMinutes] = useState<number | "">(15);

  const totalMovieTime = (Number(movies) || 0) * (Number(minutesPerMovie) || 0);
  const totalBreakTime = (Number(breaks) || 0) * (Number(breakMinutes) || 0);
  const totalMinutes = totalMovieTime + totalBreakTime;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f9f5ff] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">
          Movie Marathon Planner
        </CardTitle>
        <CardDescription className="text-black font-bold">
          Plan the perfect binge-watch session.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="movies">Number of Movies</Label>
            <Input
              id="movies"
              type="number"
              className="text-lg"
              value={movies}
              onChange={(e) =>
                setMovies(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="runtime">Avg runtime per movie (minutes)</Label>
            <Input
              id="runtime"
              type="number"
              className="text-lg"
              value={minutesPerMovie}
              onChange={(e) =>
                setMinutesPerMovie(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="breaks">Number of Breaks</Label>
              <Input
                id="breaks"
                type="number"
                className="text-lg"
                value={breaks}
                onChange={(e) =>
                  setBreaks(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="break-minutes">Break Length</Label>
              <Input
                id="break-minutes"
                type="number"
                className="text-lg"
                value={breakMinutes}
                onChange={(e) =>
                  setBreakMinutes(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#fff7e3] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Marathon total
          </p>
          <p className="text-5xl font-black tracking-tight">
            {hours}h {mins}m
          </p>
          <p className="mt-3 text-sm text-gray-800 font-medium">
            Based on {movies || 0} movies and {breaks || 0} breaks.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
