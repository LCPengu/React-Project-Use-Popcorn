import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import App1 from "./App-error.js";
import StarRating from "./StarRating.js";

function Test() {
  const [movieRating, setMovieRaing] = React.useState(0);

  return (
    <div>
      <StarRating colour="blue" maxRating={10} onSetRating={setMovieRaing} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
    {/* <StarRating maxRating={10} /> */}
    <Test />
  </React.StrictMode>
);
