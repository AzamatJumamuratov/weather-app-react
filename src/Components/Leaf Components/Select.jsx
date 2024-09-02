import arrow_right from "/SVG/caret-right.svg";
import arrow_down from "/SVG/caret-down.svg";
import classes from "./SelectStyles.module.css";
import { useRef, useState } from "react";

export default function Select({
  name,
  className,
  options,
  onChange,
  ...props
}) {
  let [arrowVal, setArrow] = useState(0);
  let arrow_img = useRef(null);
  let targetClassName = classes.select;
  return (
    <select
      ref={arrow_img}
      onClick={() =>
        setArrow((arrow) => {
          Focus(!arrow);
          return !arrow;
        })
      }
      onBlur={() =>
        setArrow((arrow) => {
          Focus(false);
          return false;
        })
      }
      onChange={(event) => onChange(event.target.value)}
      className={targetClassName + ` p-1 rounded-md border-slate-700 border-2`}
      {...props}
    >
      {options.map((obj, i) => (
        <option key={i} value={obj.value}>
          {obj.label}
        </option>
      ))}
    </select>
  );

  function Focus(arrow_state) {
    arrow_img.current.style.backgroundImage = arrow_state
      ? `url(${arrow_down})`
      : `url(${arrow_right})`;
  }
}
