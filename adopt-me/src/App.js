import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

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
      <Pet name="Shiba" animal="Dog" breed="Shiba Inu"></Pet>
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
