import { createRoot } from "react-dom/client";
import App from "./Components/App.jsx";
import "./Styles/output.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import ErrorPage404 from "./Components/ErrorPage404/ErrorPage404.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage404 />} />
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
