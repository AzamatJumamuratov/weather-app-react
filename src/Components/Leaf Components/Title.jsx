import { createElement } from "react";

export default function Title({ type, children, className }) {
  let targetClassName = "text-4xl text-slate-700";
  targetClassName += className ? " className" : "";
  switch (type) {
    case "h1":
    case "h2":
    case "h3":
      return createElement(type, { className: targetClassName }, children);
    default:
      throw Error("бул загаловок, тип ти кате бердин!");
  }
}
