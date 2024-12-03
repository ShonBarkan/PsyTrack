import './App.css';
import Graph from './components/Graph/Graph';
import Tests from './components/Tests/Tests';
import { Radio } from 'antd';
import { useAppContext } from './context';
import ExportToExcel from './components/ExsportToExcel/ExsportToExcel';
import ShowMistakes from './components/ShowMistakes/ShowMistakes';
import { useEffect, useState } from 'react';
import NoSmartPhones from './components/NoSmartPhones/NoSmartPhones';

const options = [
  {
    label: 'אנגלית',
    value: 'english',
  },
  {
    label: 'כמותי',
    value: 'math',
  },
  {
    label: 'מילולי',
    value: 'hebrew',
  },
];

function App() {
  const {setSubject} = useAppContext()
  const [isSmartphone, setIsSmartphone] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmartphone(window.innerWidth <= 768); // Adjust the width threshold as needed
    };
    // Initial check
    checkScreenSize();
    // Add event listener to handle resizing
    window.addEventListener('resize', checkScreenSize);
    // Clean up event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isSmartphone) {
    return <NoSmartPhones/>;
  }

  const onChangeSubject = ({ target: { value } }) => {
    setSubject(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Radio.Group style={{margin: "20px"}} options={options} onChange={onChangeSubject} optionType="button" />
        <div style={{display:'flex' , gap:20}}>
          <Graph/>
          <ShowMistakes/>
        </div>
        <Tests/>
        <ExportToExcel/>
      </header>
    </div>
  );
}

export default App;
