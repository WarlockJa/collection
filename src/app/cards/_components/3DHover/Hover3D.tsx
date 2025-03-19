"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TCardData = {
  id: number;
  cover: string;
  title: string;
  character: string;
};

const CARDS_DATA: TCardData[] = [
  {
    id: 1,
    cover: "./cards/hover3d/dark_rider-cover.jpg",
    title: "./cards/hover3d/dark_rider-title.png",
    character: "./cards/hover3d/dark_rider-character.webp",
  },
  {
    id: 2,
    cover: "./cards/hover3d/force_mage-cover.jpg",
    title: "./cards/hover3d/force_mage-title.png",
    character: "./cards/hover3d/force_mage-character.webp",
  },
];

function Card({ cover, title, character }: TCardData) {
  return (
    <Link href={"https://codepen.io/gayane-gasparyan/pen/wvxewXO"}>
      <div className="group relative mx-12 box-border flex h-[350px] w-[234px] items-end justify-center px-9 perspective-[2500px]">
        <div
          className={cn(
            "absolute -z-10 w-full transition-all duration-500 group-hover:transform-[perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)] group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)]",
            "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-linear-[to_top,transparent_46%,rgba(12,13,19,0.5)68%,rgba(12,13,19)97%] before:opacity-0 before:transition-all before:duration-500 before:content-[''] group-hover:before:opacity-100",
            "after:absolute after:bottom-0 after:left-0 after:h-[80px] after:w-full after:bg-linear-[to_bottom,transparent_46%,rgba(12,13,19,0.5)68%,rgba(12,13,19)97%] after:opacity-100 after:transition-all after:duration-500 after:content-[''] group-hover:after:h-[120px]",
          )}
        >
          <img src={cover} className="m-0 h-full w-full object-cover" />
        </div>
        <img
          src={title}
          className="m-0 w-full transition-transform duration-500 group-hover:transform-[translate3d(0%,-50px,100px);]"
        />
        <img
          src={character}
          className="absolute -z-10 m-0 w-full opacity-0 transition-all duration-500 group-hover:transform-[translate3d(0%,-30%,100px)] group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}

export default function Hover3D() {
  return (
    <>
      {CARDS_DATA.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}
