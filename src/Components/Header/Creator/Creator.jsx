import { useEffect, useState } from "react";
import github_icon from "/github.svg";

export default function Creator() {
  return (
    <div className="flex items-center origin-bottom-left transform-x-0 scale-[0.65] gap-4 max-[624px]:origin-center">
      <img
        src={github_icon}
        alt=""
        width={40}
        height={40}
        className=" rounded-full"
      />
      <a
        href="https://github.com/AzamatJumamuratov"
        className=" text-slate-800 underline"
      >
        Azamat Jumamuratov
      </a>
    </div>
  );
}
