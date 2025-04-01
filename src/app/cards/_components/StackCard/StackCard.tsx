import { cn } from "@/lib/utils";
import "./stackcard.css";
import Link from "next/link";

export default function StackCard() {
  return (
    <div
      className={cn(
        "h-fit w-[85%] max-w-[400px] transition-transform duration-300",
        "group hover:rotate-[5deg]",
      )}
    >
      <Link href={"https://codepen.io/havardob/pen/jOwrXaJ"} target="_blank">
        <div
          className={cn(
            "relative aspect-video cursor-pointer border-4 border-black bg-white p-3 pb-10 transition-transform duration-150",
            "before:absolute before:inset-0 before:-z-10 before:origin-center before:-translate-y-2 before:-rotate-[6deg] before:border-4 before:border-black before:bg-white before:transition-transform before:duration-150 before:content-[''] group-hover:before:-rotate-[4deg]",
            "after:absolute after:inset-0 after:-z-10 after:origin-center after:translate-y-2 after:rotate-[6deg] after:border-4 after:border-black after:bg-white after:transition-transform after:duration-150 after:content-[''] group-hover:after:rotate-[4deg]",
          )}
        >
          <div className="border-8 border-black">
            <img
              className="aspect-square w-full"
              src="./cards/infocard/oak.jpg"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
