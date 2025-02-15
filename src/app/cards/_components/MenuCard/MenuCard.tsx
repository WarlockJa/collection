import Link from "next/link";
import "./menucard.css";

export default function MenuCard() {
  return (
    <div className="card">
      <Link
        href={"https://codepen.io/brucebrotherton/pen/wvqjORe"}
        target="_blank"
      >
        <div className="card_image">
          <img
            src="./cards/menucard/menucard.jpeg"
            alt="mixed vegetable salad in a mason jar. "
          />
        </div>
        <div className="card_content">
          <h2 className="card_title">Farmstand Salad &#x2022; $9</h2>
          <div className="card_text">
            <p>
              Dig into the freshest veggies of the season! This salad-in-a-jar
              features a mixture of leafy greens and seasonal vegetables, fresh
              from the farmer's market.
            </p>
            <p>
              Served with your choice of dressing on the side:{" "}
              <strong>
                housemade ranch, cherry balsamic vinaigrette, creamy chipotle,
                avocado green goddess, or honey mustard.
              </strong>
            </p>
            <p className="upcharge">Add your choice of protein for $2 more. </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
