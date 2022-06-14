import React, {useState} from 'react'
import Display from '../components/Display'
import Inputs from '../components/Inputs'
const Home = () => {
  const [tipAmounts,setTipAmount] = useState([]);
  const [totals,setTotal] = useState([]);
  const reset = () =>{
    setTipAmount(0);
    setTotal(0);
    
  }
  return (
    <div className="container">
      <div className="container-insideBox gm">
        <div className="container-insideBox gm p1">
          <div className=" container-insideBox-g1">  
            <Inputs setTipAmounts={setTipAmount} setTotals={setTotal}/>
          </div>
          <div className="container-insideBox-g2">
            <Display tipAmount={tipAmounts} total={totals} resets={reset}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home