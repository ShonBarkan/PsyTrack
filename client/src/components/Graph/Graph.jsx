import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useAppContext } from '../../context';

const Graph = () => {
    const {testsScore} = useAppContext()
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
        <div>
            <LineChart
            xAxis={[{ data: Array.from({length: questionsAverage.length} , (_, index) => index + 1) }]}
            series={
                        [
                            {
                                data: questionsAverage
                            }
                        ]
                    }
            yAxis={[{min:0}]}
            width={500}
            height={300}
            />
        </div>
    );
}

export default Graph;
