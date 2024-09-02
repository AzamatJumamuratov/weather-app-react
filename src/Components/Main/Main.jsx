import { useState } from "react";
import { ForecastContext } from "./ForecastContext";
import Search from "./Input/Search";
import ForeCast from "./Output/ForeCast";

export default function Main() {
  const [forecastInput, SetForecastInput] = useState(undefined);
  return (
    <main className="mt-8">
      <ForecastContext.Provider value={SetForecastInput}>
        <Search />
        <ForeCast DataToFetch={forecastInput} />
      </ForecastContext.Provider>
    </main>
  );
}
