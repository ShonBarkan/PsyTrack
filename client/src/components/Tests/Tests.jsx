import React from 'react';
import TestScore from '../TestScore/TestScore';
import { useAppContext } from '../../context';



const Tests = () => {
    const {testsScore, addTest} = useAppContext()
    
    return (
        <div>
            {testsScore.map((test, index)=>(
                <TestScore length={22} testNumber={index}/>
            ))}
            <button onClick={addTest}>+</button>
        </div>
    );
}

export default Tests;
