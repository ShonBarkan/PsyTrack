import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useAppContext } from '../../context';


const subjectOption ={
    english : {
        type: 'piecewise',
        thresholds: [9,13,18 ],
        colors: ['#2196f3', '#7d65ed', '#26c6da' , '#7460ee']
    },
    math : {
        type: 'piecewise',
        thresholds: [50],
        colors: ['#2196f3']
    },
    hebrew : {
        type: 'piecewise',
        thresholds: [7,19],
        colors: ['#2196f3', '#7d65ed', '#26c6da']
    }
}

const Graph = () => {
    const {testsScore, subject } = useAppContext()
    const [questionsAverage, setQuestionsAverage] = useState([]);

    useEffect(() => {
        setQuestionsAverage(
            testsScore[0].map((_, colIndex) => {
                const columnValues = testsScore.map(row => row[colIndex]);
                const successCount = columnValues.filter(value => value === 1).length;
                return (successCount / testsScore.length) * 100;
            })
        )
    }, [testsScore]);
    return (
        <div style={{
            backgroundColor:'#efe9f4',
            borderRadius:'5px'
            }}>
            <LineChart
            xAxis=  {[
                        { 
                            data: Array.from({length: questionsAverage.length} , (_, index) => index + 1),
                            colorMap: subjectOption[subject]
                        }
                    ]}
            series={
                        [
                            {
                                data: questionsAverage
                            }
                        ]
                    }
            yAxis={[{min:0}]}
            width={1000}
            height={300}
            />
        </div>
    );
}

export default Graph;
