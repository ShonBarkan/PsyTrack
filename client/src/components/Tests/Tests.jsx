import React from 'react';
import TestScore from '../TestScore/TestScore';
import { useAppContext } from '../../context';
import ImportFromExcel from '../ImportFromExcel/ImportFromExcel';
import { Button } from 'antd';



const Tests = () => {
    const {testsScore, addTest} = useAppContext()
    
    return (
        <div>
            {testsScore.map((test, index)=>(
                <TestScore length={22} testNumber={index}/>
            ))}
            <Button style={{marginTop:"20px"}} color="primary" variant="outlined" onClick={addTest}>
                Add new Test +
            </Button>
            <ImportFromExcel/>
        </div>
    );
}

export default Tests;
