import React, { useEffect } from 'react';
import { useState, useRef } from "react";
import { useAppContext } from '../../context';


const TestScore = ({length ,testNumber}) => {
    const {setTestsScore} = useAppContext()
    const [digits, setDigits] = useState(Array(length).fill(""));
    const inputsRef = useRef([]);
  
    const handleChange = (index, value) => {
      if (/^[vx]?$/.test(value)) { // Allow only single digit
        const newDigits = [...digits];
        newDigits[index] = value;
        setDigits(newDigits);
  
        // Automatically focus the next input
        if (value && index < length - 1) {
          inputsRef.current[index + 1]?.focus();
        }
      }
    };
  
    const handleKeyDown = (index, event) => {
      if (event.key === "Backspace" && !digits[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };
  
    const handlePaste = (event) => {
      const pasteData = event.clipboardData.getData("text").slice(0, length);
      const newDigits = [...digits];
      for (let i = 0; i < pasteData.length; i++) {
        if (/^\d$/.test(pasteData[i])) {
          newDigits[i] = pasteData[i];
        }
      }
      setDigits(newDigits);
      inputsRef.current[Math.min(pasteData.length - 1, length - 1)]?.focus();
    };

    useEffect(() => {
      setTestsScore(prev => {
        const tempTests = prev
        tempTests[testNumber]= digits
        return tempTests
      }
    )}, [digits]);
    return (
      <div style={{marginTop: '10px'}}>
        <div onPaste={handlePaste} style={{ display: "flex", gap: "10px" , alignItems:'center' }}>
            <>Test {testNumber+1}</>  
          {digits.map((digit, index) => (
            <>
                {/* <>{index}</> */}
                <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                placeholder={index+1}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputsRef.current[index] = el)}
                style={{
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    fontSize: "18px",
                }}
                />
            </>
          ))}
        </div>
      </div>
    );
}

export default TestScore;
