import React from "react";
import { GiNetworkBars } from "react-icons/gi";

function Card({ title }: { color?: string; title: string }) {
  return (
    <article className="rounded-md px-4 py-2 first:bg-[#FFB200] bg-[#808080CC] text-black flex justify-between gap-x-4 ">
      <h3 className="font-semibold text-xs capitalize">{title}</h3>

      <div className="grid gap-y-4">
        <GiNetworkBars />
        <p className="text-right font-bold">0</p>
      </div>
    </article>
  );
}

export default Card;