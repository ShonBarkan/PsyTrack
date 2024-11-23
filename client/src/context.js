import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AppContext = createContext();

const defaultArrays = {
  english : new Array(22).fill(1),
  math : new Array(20).fill(1),
  hebrew : new Array(23).fill(1)
}  

// Create a provider component
export const AppProvider = ({ children }) => {
  const [testsScore, setTestsScore] = useState([new Array(22).fill(1)]);
  const [englishTestsScore, setEnglishTestsScore] = useState([new Array(22).fill(1)]);
  const [mathTestsScore, setMathTestsScore] = useState([new Array(20).fill(1)]);
  const [hebrewTestsScore, setHebrewTestsScore] = useState([new Array(23).fill(1)]);
  const [subject , setSubject] = useState("english")
  const [mistakes , setMistakes] = useState({})

  // change testsScore when subject is changing
  useEffect(() => {
    switch(subject){
      case "hebrew":setTestsScore(hebrewTestsScore) ;break;
      case "math":setTestsScore(mathTestsScore) ;break;
      default:setTestsScore(englishTestsScore) 
    }
  }, [subject]);

  // update subject_test when testsScore is changing
  useEffect(() => {
    switch(subject){
      case "hebrew":setHebrewTestsScore(testsScore) ;break;
      case "math":setMathTestsScore(testsScore) ;break;
      default:setEnglishTestsScore(testsScore) 
    }
  }, [testsScore]);

  const addTest = () => {
    const newArray = defaultArrays[subject]
    setTestsScore(prev=>[...prev, newArray])
    switch(subject){
      case "hebrew":
        setHebrewTestsScore(prev=> [...prev,newArray]) ;
        break;
      case "math":
        setMathTestsScore(prev=> [...prev,newArray]) ;
        break;
      default:
        setEnglishTestsScore(prev=> [...prev,newArray]) 
    }
  }

  return (
    <AppContext.Provider value={
        { 
          testsScore, setTestsScore, 
          subject , setSubject,
          englishTestsScore, setEnglishTestsScore,
          mathTestsScore, setMathTestsScore,
          hebrewTestsScore, setHebrewTestsScore,
          mistakes , setMistakes,
          addTest
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
