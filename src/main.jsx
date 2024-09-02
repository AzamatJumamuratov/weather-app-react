import { createRoot } from "react-dom/client";
import App from "./Components/App.jsx";
import "./Styles/output.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage404 from "./Components/ErrorPage404/ErrorPage404.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage404 />} />
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
