import Link from "next/link";
// import "./plasticcard.css";
import Chip from "./Chip";
import { cn } from "@/lib/utils";

export default function PlasticCard() {
  return (
    <Link href={"https://codepen.io/jkantner/pen/GROreja"} target="_blank">
      <div className="animate-plasticCard-rotate relative aspect-video w-full translate-3d overflow-hidden rounded-2xl bg-[hsl(223,90%,55%)] [background-image:var(--radialGradient-plasticCard)] text-white">
        <div className="absolute inset-0 flex flex-wrap items-center p-5">
          <div className="w-full font-bold italic">PlasticIsShiny</div>
          <div className="relative aspect-square w-8 translate-3d overflow-hidden rounded-sm [background-image:var(--radialGradient-plasticCard-chip)] shadow-[0_0_0_0.05rem_hsla(0,0%,0%,0.5)_inset]">
            <Chip className="h-auto w-full" />
            <div className="animate-plasticCard-texture absolute top-0 left-0 h-full w-[200%] [background-image:var(--radialGradient-plasticCard-chipTexture)]"></div>
          </div>
          <div className="ml-auto self-end text-xl">debit</div>
          <div className="flex w-full justify-between text-xl">
            <span className="bg-gradient-to-b from-white to-stone-400 bg-clip-text font-mono text-transparent drop-shadow-xs">
              0000
            </span>
            <span className="bg-gradient-to-b from-white to-stone-400 bg-clip-text font-mono text-transparent drop-shadow-xs">
              0021
            </span>
            <span className="bg-gradient-to-b from-white to-stone-400 bg-clip-text font-mono text-transparent drop-shadow-xs">
              4748
            </span>
            <span className="bg-gradient-to-b from-white to-stone-400 bg-clip-text font-mono text-transparent drop-shadow-xs">
              3647
            </span>
          </div>
          <div
            className="mb-1 w-[50%] pr-1 text-right text-[0.4rem] uppercase"
            aria-label="Valid thru"
          >
            Valid
            <br />
            thru
          </div>
          <div className="mb-1 w-[50%] bg-gradient-to-b from-white to-stone-400 bg-clip-text pl-1 font-mono text-transparent drop-shadow-xs">
            <time dateTime="2038-01">01/38</time>
          </div>
          <div
            className="bg-gradient-to-b from-white to-stone-400 bg-clip-text font-mono text-transparent uppercase drop-shadow-xs"
            aria-label="Dee Stroyer"
          >
            Dee Stroyer
          </div>
          <div
            className={cn(
              "absolute right-16 bottom-14",
              "before:absolute before:top-0 before:aspect-square before:h-12 before:rounded-full before:bg-yellow-500 before:content-['']",
              "after:absolute after:top-0 after:-right-4 after:aspect-square after:h-12 after:rounded-full after:bg-red-500/80 after:content-['']",
            )}
            role="img"
            aria-labelledby="card-vendor"
          >
            {/* <span id="card-vendor" className="card__vendor-sr">
              Mastercard
            </span> */}
          </div>
        </div>
        <div className="animate-plasticCard-texture absolute top-0 left-0 h-full w-[200%] [background-image:var(--radialGradient-plasticCard-texture)]"></div>
      </div>
    </Link>
  );
}
