import { SVGProps } from "react";

export default function Chip(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} role="img" viewBox="0 0 100 100" aria-label="Chip">
      <g opacity="0.8">
        <polyline
          points="0,50 35,50"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="0,20 20,20 35,35"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="50,0 50,35"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="65,35 80,20 100,20"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="100,50 65,50"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="35,35 65,35 65,65 35,65 35,35"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="0,80 20,80 35,65"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="50,100 50,65"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <polyline
          points="65,65 80,80 100,80"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
