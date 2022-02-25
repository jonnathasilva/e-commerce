import { useState } from 'react';
import './App.css';
import Header from './Header'
import Left from './Left.js'
import Right from './Right.js'

function App() {

  const [times, setTimes] = useState();
  const [SUM, setSUM] = useState()

  function totalValue(e) { setTimes(e); }

  function SumFinal(e) { setSUM(e) }

  const value = '125.00'

  return (
    <div className="container">
      <Header summ={SUM} totalValue={times} value={value}></Header>
      <main>
        <Left></Left>
        <Right SumFinal={SumFinal} totalValue={totalValue} value={value}></Right>
      </main>
    </div>
  );
}

export default App;
