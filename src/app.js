import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import LoadingPage from "./components/LoadingPage";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import animationData from "./objects/business.json";

// if (process.env.NODE_ENV !== "production") {
//   console.log("Looks like we are in development mode!");
// }

const jsx = (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById("app"));

// ReactDOM.render(<LoadingPage />, document.getElementById("app"));
