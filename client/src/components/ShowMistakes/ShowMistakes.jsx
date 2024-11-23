import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context';
import { Table } from 'antd';

const columns = [
    {
        title: 'כמות טעויות',
        dataIndex: 'amount',
        key: 'amount',
        align: 'center',  // Align to center
        sorter: (a, b) => a.amount - b.amount,  // Add sorting functionality
    },
    {
        title: 'סוג',
        dataIndex: 'type',
        key: 'type',
        align: 'center',  // Align to center
    }
]

const ShowMistakes = () => {
    const { subject, mistakes } = useAppContext();
    const [subjectMistakes, setSubjectMistakes] = useState([]);

    useEffect(() => {
        const occurrences = {};
        const mathData = mistakes[subject] || {};

        // Iterate over the keys in the 'math' object
        for (const key in mathData) {
            const array = mathData[key];
            
            // Iterate over the elements of each array
            array.forEach(item => {
                if (occurrences[item]) {
                    occurrences[item]++;
                } else {
                    occurrences[item] = 1;
                }
            });
        }

        // Convert the occurrences object to an array for the table
        const formattedData = Object.keys(occurrences).map(key => ({
            type: key,
            amount: occurrences[key],
        }));

        setSubjectMistakes(formattedData);
    }, [subject, mistakes]);

    return (
        <Table
            dataSource={subjectMistakes}
            columns={columns}
            rowKey="type"
            pagination={{ pageSize: 4 }}
        />
    );
}

export default ShowMistakes;
