import Link from "next/link";
import "./actorcard.css";
import { cn } from "@/lib/utils";
import IconCodepen from "@/components/icons/IconTwitter";
import IconDribbble from "@/components/icons/IconDribbble";
import IconInstagram from "@/components/icons/IconInstagram";
import IconTwitter from "@/components/icons/IconTwitter";
import Iconfacebook from "@/components/icons/IconFacebook";

export default function ActorCard() {
  return (
    <div
      className={cn(
        "group relative flex h-[379px] w-[300px] items-center justify-center overflow-hidden rounded-xl transition-all duration-[800ms]",
        "bg-[url(/cards/actorcard/background.jpg)] [background-size:300px] bg-center bg-no-repeat hover:[background-size:600px] hover:bg-[left_center]",
      )}
    >
      <Link href={"https://codepen.io/peteyio/pen/YzWBbRx"}>
        <div className="flex h-[369px] w-[290px] flex-col justify-between rounded-xl border p-5 opacity-0 transition-all duration-1000 group-hover:opacity-100">
          <h2 className="text-3xl font-bold text-white">Al Pacino</h2>
          <div className="flex flex-col gap-4">
            <IconCodepen className="h-4 w-4 fill-white stroke-white" />
            <IconInstagram className="h-4 w-4 fill-white stroke-white" />
            <IconDribbble className="h-4 w-4 fill-white stroke-white" />
            <IconTwitter className="h-4 w-4 fill-white stroke-white" />
            <Iconfacebook className="h-4 w-4 fill-white stroke-white" />
          </div>
        </div>
      </Link>
    </div>
  );
}
