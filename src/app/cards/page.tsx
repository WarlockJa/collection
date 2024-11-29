import Link from "next/link";
import InnerGlow from "./_components/InnerGlow/InnerGlow";
import Hover3D from "./_components/3DHover/Hover3D";

export default function Home() {
  return (
    <>
      <Link href={"/"} className="p-4 text-slate-200 hover:underline">
        Home
      </Link>
      <main className="m-auto grid w-full max-w-screen-lg grid-cols-2 pt-28">
        <InnerGlow />
        <Hover3D />
      </main>
    </>
  );
}
