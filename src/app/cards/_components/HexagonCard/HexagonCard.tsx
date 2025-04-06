import Link from "next/link";
// import "./hexagoncard.css";
import { cn } from "@/lib/utils";

const mainColor = "hsl(357, 100%, 49%)";

export default function HexagonCard() {
  return (
    <div
      className="relative max-w-[400px] [filter:drop-shadow(0_0_5px_var(--color))_drop-shadow(0_0_15px_var(--color))]"
      style={{ "--color": mainColor } as React.CSSProperties}
    >
      <Link href={"https://codepen.io/TajShireen/pen/abJyxrX"}>
        <div className="absolute top-[1%] left-[1%] h-[102%] w-[98%] bg-[var(--color)] [clip-path:polygon(50%_0,_100%_20%,_100%_80%,_50%_100%,_0%_80%,_0%_20%)]"></div>
        <div className="absolute top-[2.5%] left-[2.5%] h-[99%] w-[95%] [background:var(--radialGradient-hexagonCard-bgLine)] [clip-path:polygon(50%_0,_100%_20%,_100%_80%,_50%_100%,_0%_80%,_0%_20%)]"></div>
        <div className="mt-[4.8%] ml-[3.9%] w-[92%] px-[0.2rem] pt-2 [background:var(--radialGradiant-hexagonCard-bgInner)] [clip-path:polygon(50%_0,_100%_20%,_100%_80%,_50%_100%,_0%_80%,_0%_20%)]">
          <div className="flex pl-4 [background:var(--radialGradiant-hexagonCard-bgImg)]">
            <div className="flex basis-[30%] items-center bg-black/80 p-[0.3rem] pt-[15%]">
              <img
                src="./cards/hexagoncard/ferrari.png"
                alt="Team: Ferrari logo"
              />
            </div>
            <div className="flex basis-[95%] pt-[8%]">
              <img
                src="./cards/hexagoncard/charles_leclerc.png"
                alt="Charles Leclerc"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="relative pb-[16%] before:absolute before:inset-0 before:-z-10 before:bg-[url('/cards/hexagoncard/sand.jpg')] before:opacity-30 before:content-['']">
            <div className="m-auto -mt-[6%] w-fit rounded-[5px] bg-amber-400 px-[10%] text-2xl text-black">
              TD
            </div>
            <h1
              className={cn(
                "relative mt-[7%] pb-[2%] text-center text-5xl font-semibold text-black",
                "before:absolute before:right-0 before:bottom-0 before:left-0 before:h-[5%] before:content-[''] before:[background:var(--radialGradient-hexagonCard-name)]",
              )}
            >
              Leclerc
            </h1>
            <p
              className={cn(
                "relative mb-[10%] text-center text-[4rem] font-semibold text-black",
                "before:absolute before:-bottom-0.5 before:left-[50%] before:h-[5%] before:w-[25%] before:-translate-x-[50%] before:bg-black before:content-['']",
              )}
            >
              36 PTS
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
