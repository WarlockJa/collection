"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./styles-inner-glow.css";
import Link from "next/link";

export default function InnerGlow() {
  return (
    <div className="cardInnerGlow group hover:before:blur-[0.3em]">
      <Link href={"https://codepen.io/thebabydino/pen/WNVPdJg"} target="_blank">
        <Card className="aspect-video cursor-pointer border-slate-300 bg-transparent text-slate-300 transition-all group-hover:rounded-sm group-hover:ring-2">
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>My collection of cards</CardDescription>
          </CardHeader>
          <CardContent>Inner Glow card animation by Ana Tudor</CardContent>
        </Card>
      </Link>
    </div>
  );
}
