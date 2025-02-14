import Link from "next/link";
import "./nftcard.css";

export default function NFTCard() {
  return (
    <Link href={"https://codepen.io/kiberbash/pen/MWEpevg"} target="_blank">
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src="./cards/nftcard/nft-img.jpeg"
            alt="NFT"
          />
          <h2>Kibertopiks #4269</h2>
          <p className="description">
            Our Kibertopiks will give you nothing, waste your money on us.
          </p>
          <div className="tokenInfo">
            <div className="price">
              <ins>◘</ins>
              <p>0.031 ETH</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>11 days left</p>
            </div>
          </div>
          <hr />
          <div className="creator">
            <div className="wrapper">
              <img src="./cards/nftcard/nft-bg.jpeg" alt="Creator" />
            </div>
            <p>
              <ins>Creation of</ins> Kiberbash
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
