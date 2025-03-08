import Link from "next/link";
import "./card2021.scss";

export default function Card2021() {
  return (
    <div
      className="card2021"
      data-tilt
      data-tilt-scale="0.95"
      data-tilt-startY="40"
    >
      <Link href={"https://codepen.io/pieter-biesemans/pen/QWKmXEE"}>
        <div className="welcome">Welcome to</div>
        <div className="year">
          <span>Twenty</span>
          <span>Twenty</span>
          <span>One</span>
        </div>
      </Link>
    </div>
  );
}
