import Link from "next/link";
import "./glasscard.scss";

export default function GlassCard() {
  return (
    <div className="glass_card">
      <Link href={"https://codepen.io/luisoms/pen/PoGGRKp"}>
        <div className="content">
          <div className="img">
            <img src="https://unsplash.it/200/201" />
          </div>
          <div className="cardContent">
            <h3>
              Someone Else
              <br />
              <span>Grafic Designer</span>
            </h3>
          </div>
        </div>
        <ul className="sci">
          <li style={{ "--i": "1" } as React.CSSProperties}>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li style={{ "--i": "2" } as React.CSSProperties}>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li style={{ "--i": "3" } as React.CSSProperties}>
            <a href="#">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </Link>
    </div>
  );
}
