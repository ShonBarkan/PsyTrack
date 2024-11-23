import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context';
import { Popconfirm, Popover } from 'antd';
import SubSubjects from './SubSubjects/SubSubjects';

const questionDictionary = {
  hebrew:{
    sub1:{title:"אנלוגיות" ,subsub:["אוצר מילים","יצורים"]},
    sub2:{title:"הסקות" ,subsub:["כלליות","מדעיות","השלמת משפטים"]},
    sub3:{title:"הבנת הנקרא" ,subsub:["מהירות","הבנה"]}
  },
  english:{
    sub1:{title:"השלמת מילים" ,subsub:["אוצר מילים","מהירות"]},
    sub2:{title:"ניסוח מחדש" ,subsub:["אוצר מילים","מהירות","שיטה"]},
    sub3:{title:"אנסין 1" ,subsub:["אוצר מילים","הבנה"]},
    sub4:{title:"אנסין 2" ,subsub:["אוצר מילים","הבנה"]}
  },
  math:{
    sub1:{title:"כמותי" ,subsub:["גרפים","כללי","גאומטריה","אחוזים","משולשים"]},
  },
}  



const TestScore = ({ length ,testNumber }) => {
  const {testsScore,setTestsScore, subject} = useAppContext()

  // Handle click event to toggle button value
  const handleClick = (index) => {
    const newScores = [...testsScore[testNumber]]; // Copy the current state
    newScores[index] = newScores[index] === 1 ? 0 : 1; // Toggle the value at the clicked index
    setTestsScore(prev => {
      const tempTests = [...prev];  
      tempTests[testNumber] = newScores;
      return tempTests;
    }) // Update state with the new array
  };

  const chooseSubSubjectGroup = (questionNumber, titleOrSubSub) =>{
    let title = ''
    let subsub = []
    switch (subject) {
      case "hebrew":
        if (questionNumber <= 6) {
          title = questionDictionary[subject].sub1.title;
          subsub = questionDictionary[subject].sub1.subsub;
        } else if (questionNumber > 6 && questionNumber <= 18) {
          title = questionDictionary[subject].sub2.title;
          subsub = questionDictionary[subject].sub2.subsub;
        } else if (questionNumber > 18) {
          title = questionDictionary[subject].sub3.title;
          subsub = questionDictionary[subject].sub3.subsub;
        }
        break;
    
      case "math":
        title = questionDictionary[subject].sub1.title;
        subsub = questionDictionary[subject].sub1.subsub;
        break;
    
      default:
        if (questionNumber <= 8) {
          title = questionDictionary[subject].sub1.title;
          subsub = questionDictionary[subject].sub1.subsub;
        } else if (questionNumber >= 9 && questionNumber <= 12) {
          title = questionDictionary[subject].sub2.title;
          subsub = questionDictionary[subject].sub2.subsub;
        } else if (questionNumber >= 13 && questionNumber <= 17) {
          title = questionDictionary[subject].sub3.title;
          subsub = questionDictionary[subject].sub3.subsub;
        } else {
          title = questionDictionary[subject].sub4.title;
          subsub = questionDictionary[subject].sub4.subsub;
        }
        break;
    }
    return titleOrSubSub==="title" ? title+`-שאלה ${questionNumber}` :subsub

  }

  return (
    <div style={{ display: 'flex', gap: '10px' , marginTop:'10px' }}>
      <>Test {testNumber+1}</>  
      {testsScore[testNumber].map((value, index) => (
            <Popover content={<SubSubjects testNumber={testNumber+1} questionNumber={index+1} subsub={chooseSubSubjectGroup(index+1 ,"subsub")}/>} title={chooseSubSubjectGroup(index+1 ,"title")} trigger="hover" >
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
                  cursor:'pointer'
                }}
              >
                {index + 1}
              </button>
            </Popover>

        ))}
    </div>
  );
};

export default TestScore;
