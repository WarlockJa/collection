import Link from "next/link";
// import "./curtainscard.css";

export default function CurtainsCard() {
  return (
    <Link href={"https://codepen.io/prathkum/pen/JjbjEwR"}>
      <div className="group relative flex h-[360px] w-[600px] cursor-pointer flex-col items-center justify-center space-y-4 overflow-hidden rounded-2xl bg-amber-50 p-12 shadow-lg shadow-amber-50">
        <h2 className="text-4xl font-bold">Pratham</h2>
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          perspiciatis recusandae ut blanditiis maxime rem quibusdam voluptatem
          quod, at doloribus dolorum? Distinctio autem error odit, dolorum
          necessitatibus eligendi magnam officiis?
        </p>
        <div className="absolute top-0 left-0 h-[360px] w-[300px] bg-[url(https://picsum.photos/300/360)] transition-transform duration-500 group-hover:-translate-x-full"></div>
        <div className="absolute top-0 right-0 h-[360px] w-[300px] bg-[url(https://picsum.photos/300/360)] transition-transform duration-500 group-hover:translate-x-full"></div>
      </div>
    </Link>
  );
}
