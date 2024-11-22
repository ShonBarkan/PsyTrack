import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context';

const TestScore = ({ length ,testNumber }) => {
  const {testsScore,setTestsScore} = useAppContext()

  // Handle click event to toggle button value
  const handleClick = (index) => {
    const newScores = [...testsScore[testNumber]]; // Copy the current state
    newScores[index] = newScores[index] === 1 ? 0 : 1; // Toggle the value at the clicked index
    setTestsScore(prev => {
      const tempTests = [...prev];  
      tempTests[testNumber] = newScores;
      console.log(tempTests); 
      return tempTests;
    }) // Update state with the new array
  };

  return (
    <div style={{ display: 'flex', gap: '10px' , marginTop:'10px' }}>
      <>Test {testNumber+1}</>  
      {testsScore[testNumber].map((value, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: value === 1 ? 'green' : 'red',
            color: 'white',
            width:'35px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default TestScore;
