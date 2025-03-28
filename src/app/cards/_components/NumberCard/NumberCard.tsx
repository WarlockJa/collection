import "./numbercard.css";
import { cn } from "@/lib/utils";

export default function NumberCard() {
  return (
    <div className="relative m-8 h-[440px] min-w-[320px] rounded-2xl shadow-[inset_5px_5px_5px_rgba(0,_0,_0,_0.2),inset_-5px_-5px_15px_rgba(255,_255,_255,_0.1),5px_5px_15px_rgba(0,_0,_0,_0.3),-5px_-5px_15px_rgba(255,_255,_255,_0.1)] duration-500">
      <div
        className={cn(
          "absolute inset-5 flex items-center justify-center overflow-hidden rounded-2xl bg-[#2a2b2f] duration-500 hover:-translate-y-6",
          "before:content-[''], before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:bg-white/5",
        )}
      >
        <div className="p-5 text-center">
          <h2 className="absolute top-6 right-7 text-9xl text-[rgba(255,255,255,0.1)]">
            01
          </h2>
          <h3 className="z-10 mb-3.5 text-3xl text-white duration-500">
            Card One
          </h3>
          <p className="font-light text-[rgba(255,255,255,0.9)] duration-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            totam velit? Iure nemo labore inventore?
          </p>
          <a
            className="relative mt-5 inline-block rounded-sm bg-[#2196f3] px-5 py-2 text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] duration-500 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            href="https://codepen.io/saviomartin/pen/LYNgqKW"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
