import { useState } from "react";

export default function NumericInput({ min, max, ...props }) {
  if (min == undefined || max == undefined) {
    throw Error("min and max kiritilmegen");
  }
  // const [isInRange, SetIsInRange] = useState(true);
  return (
    <div className="relative">
      <input
        onKeyDown={(e) => {
          if (!CorrectInput(e)) {
            e.preventDefault();
          }
        }}
        onFocus={(e) => {
          if ((e.currentTarget.value = "0")) {
            e.currentTarget.value = "";
          }
        }}
        onBlur={(e) => {
          if (e.currentTarget.value == "") {
            e.currentTarget.value = "0";
          }
        }}
        type="number"
        min={min}
        max={max}
        defaultValue={0}
        step={0.00000000000001}
        className="w-40 invalid:focus:outline-red-500 invalid:border-red-500  p-2 border-slate-700 focus:outline-1 focus:outline-slate-700 border rounded"
        required
        {...props}
      />
    </div>
  );

  function CorrectInput(e) {
    let value = e.currentTarget.value;
    e.currentTarget.reportValidity();

    if (e.key == "-" && value.length != 0) {
      if (value.includes("-")) {
        e.currentTarget.value = value.slice(1);
      } else {
        let result = "-" + e.currentTarget.value;
        e.currentTarget.value = result;
      }
      return false;
    } else if (e.key == "." && value.includes(".")) {
      return false;
    } else if (!/[\d\.]|Backspace|ArrowLeft|ArrowRight/i.test(e.key)) {
      return false;
    }

    return true;
  }

  function CheckInRange(value, min, max) {
    if (min < value && value < max) {
      return true;
    }

    return false;
  }
}
