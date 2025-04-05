import Link from "next/link";
// import "./masterclass.css";
import { cn } from "@/lib/utils";

export default function Masterclass() {
  return (
    <Link href={"https://codepen.io/pugson/pen/mdMrgvg"} target="_blank">
      <div className="group relative grid w-fit grid-cols-[64px_1fr] overflow-hidden rounded-2xl bg-white">
        <div className="grid items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
        </div>
        <div className="left-4 flex h-16 items-center tracking-widest">
          MASTERCLASS
        </div>
        <div className="top-4 flex items-center text-2xl whitespace-nowrap [writing-mode:vertical-rl]">
          Placid.app Editor Basics ✨
        </div>
        <div className="rounded-y-2xl h-[400px] w-[400px]">
          <img src="https://picsum.photos/600/600" alt="" className="w-full" />
        </div>
        <div
          className={cn(
            "absolute right-4 bottom-4 flex max-w-11 items-center overflow-hidden rounded-full bg-violet-700 px-2.5 py-2 text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300",
            "group-hover:max-w-full",
          )}
        >
          <div className="pl-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <div
            className={cn(
              "translate-x-2.5 px-2 whitespace-nowrap uppercase opacity-0 transition-all duration-300",
              "group-hover:translate-x-0 group-hover:opacity-100",
            )}
          >
            Open in Studio
          </div>
        </div>
      </div>
    </Link>
  );
}
