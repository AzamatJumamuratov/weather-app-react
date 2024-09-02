import { useRouteError } from "react-router-dom";

export default function ErrorPage404() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className=" w-screen h-screen flex flex-col justify-center text-center">
      <h1>Ooops!</h1>
      <h2>Unocurred Error</h2>
      <p>{error.statusText}</p>
      <p>{error.data}</p>
    </div>
  );
}
