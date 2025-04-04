"use client";

import "./gridhover.css";
import Link from "next/link";

export default function GridHover() {
  return (
    <Link href={"https://codepen.io/aaroniker/pen/yLEPJXj"}>
      <div className="card-gridHover">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
          </svg>
        </span>
        <h4>Products</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa
          eligendi voluptate quas magnam, maiores aut exercitationem maxime
          debitis eos minima saepe molestias quae assumenda, doloribus omnis
          quidem ullam commodi.
        </p>
        <div className="shine"></div>
        <div className="background">
          <div className="tiles">
            <div className="tile tile-1"></div>
            <div className="tile tile-2"></div>
            <div className="tile tile-3"></div>
            <div className="tile tile-4"></div>

            <div className="tile tile-5"></div>
            <div className="tile tile-6"></div>
            <div className="tile tile-7"></div>
            <div className="tile tile-8"></div>

            <div className="tile tile-9"></div>
            <div className="tile tile-10"></div>
          </div>

          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </Link>
  );
}
