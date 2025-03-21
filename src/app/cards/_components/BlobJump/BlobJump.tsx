"use client";
import { cn } from "@/lib/utils";

export default function BlobJump() {
  return (
    <div className="group relative col-span-2 h-[500px] w-[360px] overflow-hidden shadow-[0_0_32px_-10px_rgba(0,0,0,0.08)]">
      <div
        className={cn(
          "absolute bottom-0 left-0 z-10 w-full bg-[#86b971] px-[60px] pb-[50px] text-center transition-all delay-300 duration-300",
          "group-hover:bottom-full group-hover:translate-y-full group-hover:bg-[#dee8c2] group-hover:px-[60px] group-hover:py-[50px] group-hover:delay-[0s]",
          "before:absolute before:-top-[80px] before:left-0 before:-z-1 before:h-[120px] before:w-full before:bg-inherit before:content-[''] before:[clip-path:ellipse(60%_80px_at_bottom_center)]",
          "after:absolute after:-bottom-[80px] after:left-0 after:-z-1 after:h-[120px] after:w-full after:bg-inherit after:content-[''] after:[clip-path:ellipse(60%_80px_at_top_center)]",
        )}
      >
        <h3 className="mb-[1em] text-2xl">
          Make your <span className="text-[#2d7f0b]">choice</span> right now!
        </h3>
        <p className="text-[0.75rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          quisquam doloremque nostrum laboriosam, blanditiis libero corporis
          nulla a aut?
        </p>
        <a
          href="https://codepen.io/choogoor/pen/RwBKZey"
          target="_blank"
          className="group/link absolute right-0 bottom-[1rem] left-0 flex justify-center text-[#2d7f0b] opacity-0 transition-all duration-300 group-hover:bottom-[1.5rem] group-hover:opacity-100 group-hover:delay-300"
        >
          <span>Learn How</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 w-[18px] transition-transform group-hover/link:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div
        className={cn(
          "absolute bottom-0 flex h-1/2 translate-y-full items-center justify-center bg-[#86b971] p-20 text-2xl text-[#dee8c2] duration-300",
          "group-has-[a:hover]:translate-y-0",
        )}
      >
        <h4>
          Learn <span className="text-[#2d7f0b]">now</span> and get{" "}
          <span className="text-[#2d7f0b]">40%</span> discount!
        </h4>
      </div>
      <img
        src="./cards/blobjump/background.jpeg"
        alt=""
        className="absolute top-0 left-0 -z-10 h-full w-full scale-[1.2] object-cover object-center transition-transform delay-300 duration-300 ease-[cubic-bezier(0.1,0.72,0.4,0.97)] group-hover:scale-100 group-hover:delay-100"
      />
    </div>
  );
}
