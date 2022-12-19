import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import './styles/App.css'
import Input from './components/input'
import AnalyserResults from './components/AnalyserResults'
function App() {
  const specialWords =["react","teksti"]
  const [results, setResults]= useState([]);

  const addResult =(r)=>{
    setResults([r, ...results])
  };
  const deleteByText=(t)=>{
    const r = results.filter(text=> text.text !==t)
    setResults(r);
  };

  return (
    <div className="App">
      <h1>Tekstianalysaattori</h1>
      <Input addResult={addResult} specialWords={specialWords}/>
      <AnalyserResults deleteByText={deleteByText} specialWords={specialWords} results={results}></AnalyserResults>
    </div>
  )
}

export default App
