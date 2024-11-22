import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context';

const TestScore = ({ length ,testNumber }) => {
  const {setTestsScore} = useAppContext()
  // Initialize state with an array of 1s based on the given length
  const [scores, setScores] = useState(new Array(length).fill(1));

  // Handle click event to toggle button value
  const handleClick = (index) => {
    const newScores = [...scores]; // Copy the current state
    newScores[index] = newScores[index] === 1 ? 0 : 1; // Toggle the value at the clicked index
    setScores(newScores); // Update state with the new array
  };

  // Update testsScore
  useEffect(() => {
    setTestsScore(prev => {
        const tempTests = [...prev];  
        tempTests[testNumber] = scores;  
        return tempTests;
    })
  }, [scores]);

  return (
    <div style={{ display: 'flex', gap: '10px' , marginTop:'10px' }}>
      <>Test {testNumber+1}</>  
      {scores.map((value, index) => (
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
