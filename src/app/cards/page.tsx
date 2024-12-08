import Link from "next/link";
import InnerGlow from "./_components/InnerGlow/InnerGlow";
import Hover3D from "./_components/3DHover/Hover3D";
import BlobJump from "./_components/BlobJump/BlobJump";
import GridHover from "./_components/GridHover/GridHover";
import InfoCard from "./_components/InfoCard/InfoCard";

export default function Home() {
  return (
    <div className="h-screen">
      <Link
        href={"/"}
        className="fixed top-0 p-4 text-slate-200 hover:underline"
      >
        Home
      </Link>
      <main className="m-auto grid w-full max-w-screen-lg grid-cols-3 gap-2 pt-28">
        <InnerGlow />
        <Hover3D />
        <BlobJump />
        <GridHover />
        <InfoCard />
      </main>
    </div>
  );
}
