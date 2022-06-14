import React,{useState} from 'react';
// import TipsBox from '../components/TipsBox';
import ToggleButtons from "../components/ToggleButtons";
// import Form from '../components/Form'
import { BsFillPersonFill,BsCashCoin } from "react-icons/bs";
const Inputs = ({setTotals,setTipAmounts}) => {
  const [bills,setBills] = useState([]);
  const [tips,setTips] = useState([]);
  const [peoples,setPeople] = useState([]);
  const [total,setTotal] = useState();
  const [amount,setAmount] = useState();

   
  const getBills = (e) => {
    setBills(e.target.value);
    
  };
  const getTips = (e) => {
    setTips(e.target.value);
    
  };
  const getPeople = (e) =>{
    setPeople(e.target.value);
    
  };
  const handleKeyup = (e) => {
     console.log(e);
     if (e.key === "Enter") {
       e.preventDefault();
       setTotal(bills * tips / 100);
       setAmount(total / peoples);
       setTipAmounts(amount);
       setTotals(total);
     }
   };
  return (
    <div className="inputs">
      <label className="inputs-title">Bill</label>
      <div div class = "formGroup inputs-people" >
        < span >< BsCashCoin /></span>
        <input class="form-field" type="text" placeholder="0.0" onChange={getBills} />
      </div>
      <label className="input-title">Select Tip %</label>
      <div className="inputs-tips">
        <ToggleButtons />
        {/* <Form setValue={getTips}/> */}
        <input className="inputs-custom" type="text" placeholder="Custom" onChange={getTips}></input>
      </div>
      <label className="input-title">Number of People</label>
      <div class = "formGroup inputs-people" >
      < span >< BsFillPersonFill /></span>
      <input class="form-field" type="text" placeholder="0" onChange={getPeople} onKeyUp={handleKeyup}/>
    </div>

    </div>
  )
}

export default Inputs