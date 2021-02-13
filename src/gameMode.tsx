import React from "react";

export const mode = {
    people: {
      query: 'allPeople',
    },
    starships: {
        query: 'allStarships',
    },
  };
  
  export const ModeContext = React.createContext(
    mode.people
  );