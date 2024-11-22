import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [testsScore, setTestsScore] = useState([new Array(22).fill(1)]);
  const [subject , setSubject] = useState("english")

  return (
    <AppContext.Provider value={
        { 
          testsScore, setTestsScore, 
          subject , setSubject
        }
    }>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
