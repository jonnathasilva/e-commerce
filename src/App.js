import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Left from './Left.js'
import Right from './Right.js'

function App() {

  const [times, setTimes] = useState();
  const [sun, setSun] = useState()

  useEffect(() => {
    setSun(parseFloat(value) * times);

  }, [times])

  function totalValue(e) {
    setTimes(e);
  }

  const value = '125.00'

  return (
    <div className="container">
      <Header Sun={sun} totalValue={times} value={value}></Header>
      <main>
        <Left></Left>
        <Right totalValue={totalValue} value={value}></Right>
      </main>
    </div>
  );
}

export default App;
