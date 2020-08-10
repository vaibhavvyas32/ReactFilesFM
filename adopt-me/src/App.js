import React from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import SearchParams from "./searchParam";

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
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Shiba" animal="Dog" breed="Shiba Inu" />
      <Pet name="Drake" animal="Dog" breed="Shiba Inu" />
      <Pet name="Alex" animal="Dog" breed="Shiba Inu" /> */}
    </div>
  );
};
render(<App />, document.getElementById("root"));
