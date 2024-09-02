import { useContext } from "react";
import { CircleFlag } from "react-circle-flags";
import { ForecastContext } from "../../../../ForecastContext";

export default function LocationBlock({ location }) {
  let ForecastInput = useContext(ForecastContext);

  return (
    <tr
      onClick={() => {
        ForecastInput({
          latitude: location.latitude,
          longitude: location.longitude,
        });
        document.body.querySelector("#forecast").scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }}
      key={location.id}
      className="p-4  border-slate-700 cursor-pointer hover:bg-slate-300
  active:bg-slate-500 
  border rounded"
    >
      <td className="p-1 flex justify-center">
        <CircleFlag
          width={30}
          height={30}
          countryCode={location.country_code.toLowerCase()}
        />
      </td>
      <td className="p-1 text-center">{location.name}</td>
      <td className="p-1 text-center">{location.latitude}</td>
      <td className="p-1 text-center">{location.longitude}</td>
      <td className="p-1 text-center">{location.admin1}</td>
    </tr>
  );
}
