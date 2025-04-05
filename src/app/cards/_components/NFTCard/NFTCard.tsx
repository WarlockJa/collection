import Link from "next/link";
// import "./nftcard.css";
import { cn } from "@/lib/utils";

export default function NFTCard() {
  return (
    <Link href={"https://codepen.io/kiberbash/pen/MWEpevg"} target="_blank">
      <div
        className={cn(
          "overflow-hidden rounded-2xl border border-white/20 bg-[#282c34] bg-linear-0 from-[rgba(40,44,52,1)] to-[rgba(17,0,32,0.5)] shadow-[0_7px_20px_5px_#00000088] backdrop-blur-sm transition-all duration-300 select-none",
          "hover:scale-[1.015] hover:border-white/45 hover:shadow-[0_7px_50px_10px_#000000aa] hover:brightness-125",
          "before:absolute before:top-0 before:-left-[50%] before:h-[60rem] before:-rotate-45 before:shadow-[0_0_100px_40px_#ffffff88] before:transition-all before:duration-500 before:content-['']",
          "hover:before:-top-full hover:before:left-[140%] hover:before:brightness-50 hover:before:duration-1000",
        )}
      >
        <div className={cn("flex flex-col border border-transparent p-[1rem]")}>
          <img
            className="h-[250px] max-w-full rounded-[0.5rem] object-cover"
            src="./cards/nftcard/nft-img.jpeg"
            alt="NFT"
          />
          <h2 className="my-[1rem] text-2xl text-white">Kibertopiks #4269</h2>
          <p className="my-[0.5rem] text-[#a89ec9]">
            Our Kibertopiks will give you nothing, waste your money on us.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center font-bold text-pink-300">
              <ins className="mr-[0.5rem] -ml-[0.2rem] pb-0.5 no-underline">
                ◘
              </ins>
              <p>0.031 ETH</p>
            </div>
            <div className="mr-[0.2rem] flex items-center text-[#a89ec9]">
              <ins className="m-[0.5rem] mb-[0.4rem] pb-1 no-underline">◷</ins>
              <p>11 days left</p>
            </div>
          </div>
          <hr className="w-full border-t-0 border-b-[1px] border-[#88888855]" />
          <div className="mt-[0.2rem] -mb-[0.3rem] flex items-center">
            <div className="mr-[0.5rem] flex items-center rounded-full border border-white/20 p-[0.3rem] shadow-[inset_0_0_0_4px_#000000aa]">
              <img
                src="./cards/nftcard/nft-bg.jpeg"
                alt="Creator"
                className={
                  "aspect-square w-[2rem] rounded-full border border-white/20 object-cover"
                }
              />
            </div>
            <p className="text-white">
              <ins className="text-[#a89ec9] no-underline">Creation of</ins>{" "}
              Kiberbash
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
