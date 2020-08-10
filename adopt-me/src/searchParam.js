import React, { useState } from "react";
//import React from "react";

const SearchParam = () => {
  //const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle,US"); //You cannot use if else / for loop in hooks

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <h1>{location}</h1>
          Location
          {/* <input id="location" value={location} placeholder="Location" /> */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParam;
