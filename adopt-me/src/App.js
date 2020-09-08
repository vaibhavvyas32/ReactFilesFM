import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
//import Pet from "./Pet";
import SearchParams from "./searchParam";
import Details from "./Details";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, {
  //     name: "Shiba",
  //     animal: "Dog",
  //     breed: "Shiba Inu",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Alex",
  //     animal: "Dog",
  //     breed: "Shiba Inu",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Drake",
  //     animal: "Dog",
  //     breed: "Shiba Inu",
  //   }),
  // ]);
  return (
    <div>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      {/* <h1 id="something-important">Adopt Me!</h1> */}
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>

      {/* <Pet name="Shiba" animal="Dog" breed="Shiba Inu" />
      <Pet name="Drake" animal="Dog" breed="Shiba Inu" />
      <Pet name="Alex" animal="Dog" breed="Shiba Inu" /> */}
    </div>
  );
};
render(<App />, document.getElementById("root"));
