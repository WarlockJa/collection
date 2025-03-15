"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import "./congratulationscard.scss";
import Link from "next/link";

export default function CongratulationsCard() {
  return (
    <div className="congratulations_card">
      <Link href={"https://codepen.io/designfenix/pen/yLJWMKV"}>
        <div className="ilustration">
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
            background="white"
            loop
            autoplay
          />
        </div>
        <h3>¡Congratulations!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce
          urna nisl, quam conubia nam sapien id penatibus.
        </p>
        <button>Continue</button>
      </Link>
    </div>
  );
}
