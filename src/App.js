import { useState } from 'react';
import './App.css';
import Header from './Header'
import Left from './Left.js'
import Right from './Right.js'

function App() {

  const [times, setTimes] = useState();
  const [SUM, setSUM] = useState()
  const [trash, setTrash] = useState()

  function totalValue(e) { setTimes(e); }

  function SumFinal(e) { setSUM(e) }

  function OnContents(e) { setTrash(e) }

  function Contents(e) { setTrash(e) }

  const value = '125.00'

  return (
    <div className="container">
      <Header Contents={Contents} trash={trash} summ={SUM} totalValue={times} value={value}></Header>
      <main>
        <Left></Left>
        <Right trash={trash} OnContents={OnContents} SumFinal={SumFinal} totalValue={totalValue} value={value}></Right>
      </main>
    </div>
  );
}

export default App;
