import Link from "next/link";
import "./actorcard.css";

export default function ActorCard() {
  return (
    <div className="actor_card card0">
      <Link href={"https://codepen.io/peteyio/pen/YzWBbRx"}>
        <div className="border">
          <h2>Al Pacino</h2>
          <div className="icons">
            <i className="fa fa-codepen" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-dribbble" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}
