import Link from "next/link";
import InnerGlow from "./_components/InnerGlow/InnerGlow";
import Hover3D from "./_components/3DHover/Hover3D";
import BlobJump from "./_components/BlobJump/BlobJump";
import GridHover from "./_components/GridHover/GridHover";
import CircleCard from "./_components/CircleCard/CircleCard";
import PlasticCard from "./_components/PlasticCard/PlasticCard";
import TreeCard from "./_components/TreeCard/TreeCard";
import NFTCard from "./_components/NFTCard/NFTCard";
import MenuCard from "./_components/MenuCard/MenuCard";
import Masterclass from "./_components/Masterclass/Masterclass";
import CityCard from "./_components/CityCard/CityCard";
import StackCard from "./_components/StackCard/StackCard";
import HoverCard from "./_components/HoverCard/HoverCard";
import HexagonCard from "./_components/HexagonCard/HexagonCard";
import SlideUpCard from "./_components/SlideUpcard/SlideUpCard";
import RingCard from "./_components/Ringcard/RingCard";
import CurtainsCard from "./_components/CurtainsCard/CurtainsCard";
import ShoeCard from "./_components/ShoeCard/ShoeCard";
import Card2021 from "./_components/Card2021/Card2021";
import GlassCard from "./_components/GlassCard/GlassCard";
import CongratulationsCard from "./_components/CongratulationsCard/CongratulationsCard";
import ActorCard from "./_components/ActorCard/ActorCard";
import NumberCard from "./_components/NumberCard/NumberCard";
import SealCard from "./_components/SealCard/SealCard";

export default function Home() {
  return (
    <div className="h-screen">
      <Link
        href={"/"}
        className="text-background fixed top-0 p-4 hover:underline"
      >
        Home
      </Link>
      <main className="m-auto grid w-full max-w-(--breakpoint-lg) grid-cols-3 gap-2 pt-28">
        <InnerGlow />
        <Hover3D />
        <BlobJump />
        <ActorCard />
        <div className="col-span-2">
          <Masterclass />
        </div>
        <NumberCard />
        <SealCard />
        <CircleCard />
        <NFTCard />
        <StackCard />
        <PlasticCard />
        <HoverCard />
        <HexagonCard />

        {/* <GridHover />
        <div className="col-span-2">
          <TreeCard />
        </div>
        <MenuCard />
        <CityCard />
        <SlideUpCard />
        <RingCard />
        <CurtainsCard />
        <ShoeCard />
        <Card2021 />
        <GlassCard />
        <CongratulationsCard /> */}
      </main>
    </div>
  );
}
