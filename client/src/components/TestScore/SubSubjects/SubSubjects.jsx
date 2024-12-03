import { Checkbox } from 'antd';
import React from 'react';
import { useAppContext } from '../../../context';

const SubSubjects = ({subsub ,testNumber , questionNumber}) => {
    const {subject,setMistakes,mistakes} = useAppContext()

    const onChange = (checkedValues) => {
        setMistakes((prev) => {
            const tempMistakes = { ...prev };
            if (!tempMistakes[subject]) tempMistakes[subject] = {}; // Ensure subject exists
            tempMistakes[subject][`${testNumber}_${questionNumber}`] = checkedValues;
            return tempMistakes; // Return the updated state
        });
    };

    // Safely calculate defaultValue
    const defaultValue =
        mistakes[subject]?.[`${testNumber}_${questionNumber}`] || [];

    return (
        <div dir='rtl'>
            <Checkbox.Group options={subsub} onChange={onChange} defaultValue={defaultValue}/>
        </div>
    );
}

export default SubSubjects;
