"use client";

import Link from "next/link";

export default function HomeComponent() {
  return (
    <Link href={"/cards"} className="p-4 text-slate-200 hover:underline">
      Cards
    </Link>
  );
}
