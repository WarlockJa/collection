// import "./hovercard.css";
import Link from "next/link";

export default function HoverCard() {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-black outline-2 outline-white"></div>
      <div className="absolute inset-0 bg-black outline-2 outline-white transition-transform duration-300 group-hover:-translate-1.5"></div>
      <div className="absolute inset-0 bg-black p-4 text-white outline-2 outline-white transition-transform duration-300 group-hover:-translate-3">
        <div>Microservices Orchestration</div>
        <p>Temporal is a perfect fit for orchestrating microservices.</p>
        <Link
          className="text-emerald-300"
          href={"https://codepen.io/jh3y/pen/rNyRNXE"}
          target="_blank"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
