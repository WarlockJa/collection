"use client";

import { BatteryChargingIcon } from "lucide-react";
import "./circlecard.css";

export default function CircleCard() {
  return (
    <li className="flex text-white">
      <div className="icon self-center">
        <BatteryChargingIcon />
      </div>
      <div className="title">Step 1</div>
      <div className="descr">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        porro.
      </div>
    </li>
  );
}
