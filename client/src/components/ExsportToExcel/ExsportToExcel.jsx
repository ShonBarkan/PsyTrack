import React from 'react';
import * as XLSX from 'xlsx';
import { useAppContext } from '../../context';
import { FloatButton, Tooltip } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const ExportToExcel = () => {
    const {englishTestsScore,mathTestsScore,hebrewTestsScore} = useAppContext()

    const exportToExcel = () => {
    const wb = XLSX.utils.book_new(); // Create a new workbook

    // Convert each array to a sheet
    const ws1 = XLSX.utils.aoa_to_sheet(englishTestsScore);
    const ws2 = XLSX.utils.aoa_to_sheet(mathTestsScore);
    const ws3 = XLSX.utils.aoa_to_sheet(hebrewTestsScore);

    // Append each sheet to the workbook with a name
    XLSX.utils.book_append_sheet(wb, ws1, 'אנגלית');
    XLSX.utils.book_append_sheet(wb, ws2, 'כמותי');
    XLSX.utils.book_append_sheet(wb, ws3, 'מילולי');

    // Get the current date, hour, and minute in YYYY-MM-DD_HH-MM format
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    // Create the file name with the current date, hour, and minute
    const fileName = `מעקב_פרקים_${currentDate}.xlsx`;

    // Write to Excel and trigger download with the dynamic filename
    XLSX.writeFile(wb, fileName);
  };

  return (
    <Tooltip placement="top" title={'Export scores'}>
        <FloatButton
            icon={<DownloadOutlined />}
            type="primary"
            style={{insetInlineEnd: 30}}
            onClick={exportToExcel}
        />
    </Tooltip>
  );
};

export default ExportToExcel;
