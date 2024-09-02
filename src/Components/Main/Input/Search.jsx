import { useState } from "react";
import Select from "../../Leaf Components/Select";
import { options } from "./SelectOptions";
import Coordinates from "./ResultByCoordinates/Coordinates";
import Location from "./ResultByLocation/Location";
import LocationResults from "./ResultByLocation/Results/LocationResults";
import Spinner from "../../Leaf Components/Spinner";

export default function Search() {
  const [option, setOption] = useState(options[0].value);
  const [isLoading, SetIsLoading] = useState(true);
  const [SpinnerVisibility, SetSpinnerVisibility] = useState(false);
  const [locationResults, SetLocationResults] = useState();

  return (
    <>
      <div className="flex gap-6 justify-center items-start flex-wrap ">
        {option == "Location" && (
          <Location
            dispatchFn={SetLocationResults}
            LoadingFn={SetIsLoading}
            SpinnerFn={SetSpinnerVisibility}
          />
        )}
        {option == "Coordinates" && <Coordinates />}
        <Select name="type" options={options} onChange={HandleSelectChange} />
      </div>
      {isLoading && SpinnerVisibility ? (
        <div className="flex justify-center items-center h-20">
          <Spinner />
        </div>
      ) : option == "Location" ? (
        <LocationResults results={locationResults} />
      ) : null}
    </>
  );

  function HandleSelectChange(value) {
    SetLocationResults(undefined);
    setOption(value);
  }
}
