import Link from "next/link";
import "./shoecard.css";

export default function ShoeCard() {
  return (
    <div className="shoe_card">
      <Link href={"https://codepen.io/katywellington91/pen/PoGVzwZ"}>
        <div className="imgBx">
          <img src="/cards/shoecard/shoes.png" />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </Link>
    </div>
  );
}
