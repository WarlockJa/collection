import Link from "next/link";
import "./slideupcard.css";

export default function SlideUpCard() {
  return (
    <div className="slideup_card">
      <Link href={"https://codepen.io/seyedi/pen/zYoeLEv"}>
        <img
          src="https://i.imgur.com/oYiTqum.jpg"
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://i.imgur.com/7D7I6dI.png"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="m-0 text-[#6a515e]">Jessica Parker</h3>
              <span className="card__status">1 hour ago</span>
            </div>
          </div>
          <p className="card__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            blanditiis?
          </p>
        </div>
      </Link>
    </div>
  );
}
