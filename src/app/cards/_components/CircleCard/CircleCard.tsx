"use client";

import { BatteryChargingIcon } from "lucide-react";
import "./circlecard.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CircleCard() {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-white">
      <Link href={"https://codepen.io/MarkBoots/pen/gOXEwpg"} target="_blank">
        <div
          className={cn(
            "relative flex aspect-square w-[18rem] items-center pl-[4rem]",
            "before:absolute before:inset-0 before:overflow-hidden before:rounded-full before:border-[2rem] before:border-white before:pl-[10rem] before:text-[12rem] before:leading-[1.1] before:font-bold before:text-emerald-500 before:content-['1']",
            "after:absolute after:inset-0 after:rounded-full after:border-[2rem] after:border-white after:leading-[1.1] after:[filter:drop-shadow(-0.25rem_0.25rem_0.0675rem_rgba(0,0,0,0.75))_blur(5px)] after:content-['']",
          )}
        >
          <div className="flex w-[7.5rem] flex-col text-black">
            <div className="flex justify-center text-emerald-500">
              <BatteryChargingIcon size={32} />
            </div>
            <div className="text-[2rem]">Step 1</div>
            <div className="text-sm leading-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
