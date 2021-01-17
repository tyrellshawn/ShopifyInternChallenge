import React, { useState, useContext } from 'react';

//Context for Nomination State
export const NominationContext = React.createContext();
export const UpdateNominationContext = React.createContext();

//Hooks for Retrievieng Nomination or Updating Nomination State
export function useNominations() {
  return useContext(NominationContext);
}

export default function NominationProvider({ children }) {
  let nominated = new Map();
  const [nominations, setNominations] = useState(nominated);
  function updateNominations(movieID) {
    console.log(`Movie Nominated with ID: ${movieID}`);
    setNominations((nominations) => [...nominations, movieID]);
  }
  return (
    <NominationContext.Provider value={{ nominations, setNominations }}>
      <UpdateNominationContext.Provider value={updateNominations}>
        {children}
      </UpdateNominationContext.Provider>
    </NominationContext.Provider>
  );
}
