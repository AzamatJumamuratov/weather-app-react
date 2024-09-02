import LocationBlock from "./LocationBlock/LocationBlock";

export default function LocationResults({ results }) {
  return results == undefined ? null : results.length == 0 ? (
    <div className="flex justify-center items-center h-48 p-4">
      <h2 className="text-lg">City Not Found</h2>
    </div>
  ) : (
    <div className="mx-12 max-[580px]:mx-0 overflow-x-auto">
      <table className="mt-5 w-full border-collapse overflow-x-auto">
        <thead>
          <tr className="border border-spacing-0 border-b border-b-slate-700">
            <th className="p-1">Country</th>
            <th className="p-1">Name</th>
            <th className="p-1">Latitude</th>
            <th className="p-1">Longitude</th>
            <th className="p-1">Adminstrative Area</th>
          </tr>
        </thead>
        <tbody>
          {results.map((location) => {
            return <LocationBlock key={location.id} location={location} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
