import React from 'react';

export default function GraphCard() {
  return (
    <div className="graphCardBox">
      <div className="graphCard">
        <div className="graphHeaderbox">
          <h3 className="statistics">Statistics</h3>
          <p className="dates">2 August - 8 August</p>
        </div>
        <div className="graph"></div>
      </div>
    </div>
  );
}
