import Link from "next/link";
import "./ringcard.css";

export default function RingCard() {
  return (
    <div className="ring_panel">
      <Link href={"https://codepen.io/peteyio/pen/bGBGvvK"}>
        <div className="ring-3">
          <div className="ring_card"></div>
          <div className="absolute h-64 w-44 overflow-hidden border border-white/50 transition-all duration-1000">
            <p className="title">Brazil</p>
            <div className="slide">
              <h6 className="para">Latest Deals from Heathrow</h6>
              <div className="line">
                <h6 className="para">OUT</h6>{" "}
                <i className="fa fa-plane" aria-hidden="true"></i>
                <h6 className="para">£849</h6>
              </div>
              <div className="line">
                <h6 className="para">RTN</h6>{" "}
                <i className="fa fa-plane" aria-hidden="true"></i>
                <h6 className="para">£659</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
