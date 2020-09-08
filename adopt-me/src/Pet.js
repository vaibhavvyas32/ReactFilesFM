import React from "react";
//export default function Pet({ name, animal, breed }) {
//return React.createElement("div", {}, [
//  React.createElement("h1", {}, name),
//  React.createElement("h2", {}, animal),
//  React.createElement("h3", {}, breed),
//]);
//   return (
//     <div>
//       <br></br>
//       <h1>Name: {name}</h1>
//       <h2>Animal: {animal}</h2>
//       <h3>Breed: {breed}</h3>
//     </div>
//   );
// }
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "html://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}- ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
