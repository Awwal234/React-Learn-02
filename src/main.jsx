import * as React from "react";
import App from './App.jsx';
import SignUp from './pages/SignUp.jsx';
import System from './pages/app/System.jsx';
import ColorCode from './pages/app/ColorCode.jsx';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/create-account",
    element: <SignUp/>,
  },
  {
    path: "/application-system",
    element: <System/>,
  },
  {
    path: "/color/:colorId",
    element: <ColorCode/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
