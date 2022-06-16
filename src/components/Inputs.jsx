import React,{useState} from 'react';
// import TipsBox from '../components/TipsBox';
import ToggleButtons from "../components/ToggleButtons";
// import Form from '../components/Form'
import { BsFillPersonFill,BsCashCoin } from "react-icons/bs";
const Inputs = ({setTotals,setTipAmounts}) => {
  const [bills,setBills] = useState(0);
  const [tips,setTips] = useState(0);
  const [peoples,setPeople] = useState(0);
  const [total,setTotal] = useState(0);
  const [amount,setAmount] = useState(0);
  const [values,setValues] = useState();

   
  
  const handleKeyup = (e) => {
     console.log(e);
     if (e.key === "Enter") {
       e.preventDefault();
       if (values===null){
          setTotal(bills * tips / 100);
          setAmount(total / peoples);
       } else{
          setTotal(bills * values / 100);
          setAmount(total / peoples);
       }
      setTipAmounts(Number(amount).toFixed(2));
      setTotals(Number(total).toFixed(2));
      console.log(amount,total,bills,tips,values,peoples)
     }
    if (e.key === "Escape"){
      setBills(0);
      setTips(0);
      setPeople(0);
      setValues("");
      console.log(bills,tips,peoples,values)
    }
   };
    // const keyUpHandler = (event: React.KeyboardEvent <HTMLInputElement>) => {
    //   if (event.code === "Escape") {
    //     const confirm = window.confirm(
    //       "Are you sure want to clear this text feild?"
    //     );

    //     if (confirm) {
    //       setBills("");
    //       setTips("");
    //       setPeople("");
    //     }
    //   }
    // };
   const getBills = (e) => {
     setBills(Number(e.target.value));

   };
   const getTips = (e) => {
     setTips(Number(e.target.value));

   };
   const getPeople = (e) => {
     setPeople(Number(e.target.value));

   };
  // const testBtn = (e) => {
  //   if (values===null){
  //     console.log(tips)
  //   }else{console.log(values)}
  // };
  return (
    <div className="inputs" onKeyUp={handleKeyup} >
      <label className="inputs-title">Bill</label>
      <div className = "formGroup inputs-people" >
        < span >< BsCashCoin /></span>
        <input className="form-field" type="text" placeholder="0" onChange={getBills} value={bills} />
      </div>
      <label className="input-title">Select Tip %</label>
      <div className="inputs-tips">
        <ToggleButtons values={setValues}/>
        {/* <button onClick={testBtn}>click</button> */}
        {/* <Form setValue={getTips}/> */}
        <input className="inputs-custom" type="text" placeholder="Custom" onChange={getTips} value={values}></input>
      </div>
      <label className="input-title">Number of People</label>
      <div className = "formGroup inputs-people" >
      < span >< BsFillPersonFill /></span>
      <input className="form-field" type="text" placeholder="0" onChange={getPeople} value={peoples}/>
      </div>

    </div>
  )
}

export default Inputs