import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Link from "./Link";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherWrapper">
          <Search />
          <Header />
          <CurrentWeather />
        </div>
        <Link />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
