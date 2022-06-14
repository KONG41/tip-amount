import React from 'react'

const Display = ({tipAmount,total,resets}) => {
  return (
    <div className="display">
      <div className="display-box">
        <div className="display-box1">
          <div className="display-title">
            <label className="input-title">Tip Amount</label>
            <span>/ person</span>
          </div>
          <div className="display-tip">
          ${tipAmount}
          </div>
        </div>

        <div className="display-box1">
          <div className="display-title">
            <label className="input-title">Total</label>
            <span>Tip to pay</span>
          </div>
          <div className="display-tip">
            ${total}
          </div>
        </div>
        <div className="display-reset">
          <button className="btn btn-primary" onClick={resets}>RESET</button>
        </div>
        
      </div>
    </div>
  )
}

export default Display