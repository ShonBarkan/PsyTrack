import './App.css';
import Graph from './components/Graph/Graph';
import Tests from './components/Tests/Tests';
import { Radio } from 'antd';
import { useAppContext } from './context';

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

  const onChangeSubject = ({ target: { value } }) => {
    setSubject(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Radio.Group options={options} onChange={onChangeSubject} optionType="button" />
        <Graph/>
        <Tests/>
      </header>
    </div>
  );
}

export default App;
