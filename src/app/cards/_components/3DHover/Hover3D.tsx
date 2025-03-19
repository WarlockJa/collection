"use client";
import Link from "next/link";
import "./styles-hover3d.css";

export default function Hover3D() {
  return (
    <>
      <Link href={"https://codepen.io/gayane-gasparyan/pen/wvxewXO"}>
        {/* <div className="card3DHover"> */}
        <div className="relative my-12 flex h-80 w-48 items-center justify-center py-9 perspective-[2500px]">
          <div className="wrapper">
            <img
              src="./cards/hover3d/dark_rider-cover.jpg"
              className="cover-image"
            />
          </div>
          <img src="./cards/hover3d/dark_rider-title.png" className="title" />
          <img
            src="./cards/hover3d/dark_rider-character.webp"
            className="character"
          />
        </div>
      </Link>
      <Link href={"https://codepen.io/gayane-gasparyan/pen/wvxewXO"}>
        <div className="card3DHover">
          <div className="wrapper">
            <img
              src="./cards/hover3d/force_mage-cover.jpg"
              className="cover-image"
            />
          </div>
          <img src="./cards/hover3d/force_mage-title.png" className="title" />
          <img
            src="./cards/hover3d/force_mage-character.webp"
            className="character"
          />
        </div>
      </Link>
    </>
  );
}
