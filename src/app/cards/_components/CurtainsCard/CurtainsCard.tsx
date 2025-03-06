import Link from "next/link";
import "./curtainscard.css";

export default function CurtainsCard() {
  return (
    <div className="container">
      <Link href={"https://codepen.io/prathkum/pen/JjbjEwR"}>
        <div className="content">
          <h1>Pratham</h1>
          <h3>
            I love designing websites and keep things as simple as possible. My
            goals is to focus on minimalism and conveying the message that you
            want to send
          </h3>
        </div>
        <div className="flap"></div>
      </Link>
    </div>
  );
}
