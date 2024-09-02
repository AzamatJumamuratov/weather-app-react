import { Form } from "react-router-dom";
import Button from "../../../Leaf Components/Button";
import NumericInput from "../../../Leaf Components/NumericInput";
import { useContext, useEffect, useRef } from "react";
import { ForecastContext } from "../../ForecastContext";

export default function Coordinates() {
  const ForeCastInput = useContext(ForecastContext);

  return (
    <Form
      className="flex justify-center items-start gap-4 max-[678px]:flex-col"
      onSubmit={HandleSubmit}
    >
      <label className="w-64 flex justify-between items-center gap-2 ">
        Latitude:
        <NumericInput name="latitude" min={-90} max={90} />
      </label>
      <label className="w-64 flex justify-between items-center gap-2 ">
        Longitude:
        <NumericInput name="longitude" min={-180} max={180} />
      </label>
      <Button type="submit">Submit</Button>
    </Form>
  );

  function HandleSubmit(e) {
    let form = e.currentTarget;
    ForeCastInput({
      latitude: form.elements.latitude.value,
      longitude: form.elements.longitude.value,
    });
    document.body.querySelector("#forecast").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
}
