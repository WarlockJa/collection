import Link from "next/link";
import "./hexagoncard.css";

export default function HexagonCard() {
  return (
    <div
      className="hexagon_card"
      style={{ "--color": "hsl(357, 100%, 49%)" } as React.CSSProperties}
    >
      <Link href={"https://codepen.io/TajShireen/pen/abJyxrX"}>
        <div className="card__border"></div>
        <div className="card__border-line"></div>
        <div className="card__inner">
          <div className="card__img">
            <div className="img__team">
              <img
                src="https://i.pinimg.com/originals/86/30/83/863083894905bc5140b054917fe597d5.png"
                alt="Team: Ferrari logo"
              />
            </div>
            <div className="img__athlete">
              <img
                src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png"
                alt="Charles Leclerc"
              />
            </div>
          </div>
          <div className="card__text">
            <div
              className="card__type"
              style={
                { "--bg-color": "hsl(40, 100%, 50%);" } as React.CSSProperties
              }
            >
              TD
            </div>
            <h1 className="name">Leclerc</h1>
            <p className="points">36 PTS</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
