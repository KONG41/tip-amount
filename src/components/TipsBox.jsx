import React from 'react';
const TipsBox = ({amount,value}) => {
  const handleClick = (e) => {
    e.currentTarget.classList.add("tipsBox-change");
  }
  return (
    <div className="tipsBox" onClick={handleClick}>
         {amount}
    </div>

  )
}

export default TipsBox