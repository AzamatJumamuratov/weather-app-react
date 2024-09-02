import { useEffect, useRef, useState } from "react";
import Button from "../../../Leaf Components/Button";
import LocationResults from "./Results/LocationResults";
import { Form } from "react-router-dom";

export default function Location({ dispatchFn, LoadingFn, SpinnerFn }) {
  return (
    <div>
      <Form action="" onSubmit={handleSubmit} className="flex gap-4 p-0">
        <input
          name="location"
          className="p-2 invalid:border-red-500 border-slate-700 border rounded"
          placeholder="Enter City Name..."
          required
        />
        <Button>Search</Button>
      </Form>
    </div>
  );

  function SearchLocations(name) {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.results == undefined) {
          dispatchFn([]);
        } else {
          dispatchFn(result.results);
        }
        LoadingFn(false);
      })
      .finally(() => {
        SpinnerFn(false);
      });
  }

  function handleSubmit(e) {
    LoadingFn(true);
    SpinnerFn(true);
    let locationName = e.currentTarget.elements.location.value;
    SearchLocations(locationName);
  }
}
