"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import "./congratulationscard.scss";

export default function CongratulationsCard() {
  return (
    <div className="congratulations_card">
      <div className="ilustration">
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
          background="white"
          loop
          autoplay
        />
        {/* <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json"
          background="white"
          speed="1"
          loop
          autoplay
        ></lottie-player> */}
      </div>
      <h3>¡Congratulations!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna
        nisl, quam conubia nam sapien id penatibus.
      </p>
      <button>Continue</button>
    </div>
  );
}
