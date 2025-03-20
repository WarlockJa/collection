"use client";
import { cn } from "@/lib/utils";
import "./styles-blob-jump.css";

export default function BlobJump() {
  return (
    // <div className="cardBlobJump group col-span-2">
    <div className="group relative col-span-2 h-[500px] w-[360px] overflow-hidden shadow-[0_0_32px_-10px_rgba(0,0,0,0.08)]">
      {/* <div className="cardBlobJump__content"> */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-full bg-[#86b971] pt-16 pr-12 text-center transition-all duration-300 group-hover:bottom-full group-hover:translate-full group-hover:bg-[#dee8c2] group-hover:px-[60px] group-hover:py-[50px]",
          "before:absolute before:-top-[80px] before:left-0 before:-z-10 before:h-[120px] before:w-full before:content-[''] before:[clip-path:ellipse(60%_80px_at_bottom_center)]",
          "after:absolute after:-bottom-[80px] after:left-0 after:-z-10 after:h-[120px] after:w-full after:content-[''] after:[clip-path:ellipse(60%_80px_at_top_center)]",
        )}
      >
        <h3 className="cardBlobJump__title">
          Make your <span>choice</span> right now!
        </h3>
        <p className="cardBlobJump__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          quisquam doloremque nostrum laboriosam, blanditiis libero corporis
          nulla a aut?
        </p>
        <a href="#" className="cardBlobJump__link">
          <span>Learn How</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 w-[18px] transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div className="cardBlobJump__extra">
        <h4>
          Learn <span>now</span> and get <span>40%</span> discount!
        </h4>
      </div>
      <img
        src="./cards/blobjump/background.jpeg"
        alt=""
        // className="absolute top-0 left-0 -z-10 h-full w-full scale-[1.2] object-cover object-center transition-transform duration-300 group-hover:scale-100"
      />
    </div>
    // <div className="cardBlobJump col-span-2">
    //   <div className="cardBlobJump__content">
    //     <h3 className="cardBlobJump__title">
    //       Make your <span>choice</span> right now!
    //     </h3>
    //     <p className="cardBlobJump__text">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
    //       quisquam doloremque nostrum laboriosam, blanditiis libero corporis
    //       nulla a aut?
    //     </p>
    //     <a href="#" className="cardBlobJump__link">
    //       <span>Learn How</span>
    //       <svg
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    //   <div className="cardBlobJump__extra">
    //     <h4>
    //       Learn <span>now</span> and get <span>40%</span> discount!
    //     </h4>
    //   </div>
    //   <img src="./cards/blobjump/background.jpeg" alt="" />
    // </div>
  );
}
