import Link from "next/link";
// import "./sealcard.css";

export default function SealCard() {
  return (
    <div className="group relative m-[40px] max-h-[350px] max-w-[250px] shadow-[0_40px_60px_-6px_black]">
      <Link href={"https://codepen.io/luanmanara/pen/poyLbWx"} target="_blank">
        <h2 className="rounded-t-sm bg-[#6184a8] p-2 text-center text-white">
          Seal
        </h2>
        <img
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
          className="relative h-full w-full object-cover"
        />
        <p className="absolute top-0 mt-10 block h-0 overflow-y-scroll bg-slate-200 p-4 text-[1.2rem] opacity-0 transition-all duration-700 group-hover:h-full group-hover:opacity-100">
          Pinnipeds, commonly known as seals,[a] are a widely distributed and
          diverse clade of carnivorous, fin-footed, semiaquatic marine mammals.
          They comprise the extant families Odobenidae (whose only living member
          is the walrus), Otariidae (the eared seals: sea lions and fur seals),
          and Phocidae (the earless seals, or true seals).
        </p>
      </Link>
    </div>
  );
}
