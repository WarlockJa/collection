import Link from "next/link";
import "./numbercard.css";

export default function NumberCard() {
  return (
    <div className="number_card">
      <Link href={"https://codepen.io/saviomartin/pen/LYNgqKW"}>
        <div className="box">
          <div className="content">
            <h2>01</h2>
            <h3>Card One</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </Link>
    </div>
  );
}
