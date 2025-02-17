import Link from "next/link";
import "./masterclass.css";

export default function Masterclass() {
  return (
    <Link href={"https://codepen.io/pugson/pen/mdMrgvg"} target="_blank">
      <div className="box w-fit">
        <div className="box-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
        </div>
        <div className="box-label">MASTERCLASS</div>
        <div className="box-title">Placid.app Editor Basics ✨</div>
        <div className="box-image">
          <img src="https://picsum.photos/600/600" alt="" />
        </div>
        <div className="studio-button">
          <div className="studio-button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <div className="studio-button-label">Open in Studio</div>
        </div>
      </div>
    </Link>
  );
}
