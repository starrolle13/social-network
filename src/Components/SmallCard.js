import React from 'react';

export default function SmallCard() {
  return (
    <div className="smallCardBox">
      <div className="smallCard">
        <div className="cardTop">
          <div className="facebookIcon"></div>
          <p className="facebook">Facebook</p>
          <p className="percentage">+21.7%</p>
        </div>
        <div className="cardBottom">
          <h2 className="facebookFollowers">10,328</h2>
          <div className="percentIcon"></div>
        </div>
        <div className="smallFollowerText">Followers</div>
      </div>
      <div className="smallCard2">
        <div className="cardTop">
          <div className="facebookIcon"></div>
          <p className="facebook">Instagram</p>
          <p className="percentage">+34.3%</p>
        </div>
        <div className="cardBottom">
          <h2 className="facebookFollowers">17,536</h2>
          <div className="percentIcon"></div>
        </div>
        <div className="smallFollowerText">Followers</div>
      </div>
      <div className="smallCard3">
        <div className="cardTop">
          <div className="facebookIcon"></div>
          <p className="facebook">Twitter</p>
          <p className="percentage">+15.9%</p>
        </div>
        <div className="cardBottom">
          <h2 className="facebookFollowers">107,291</h2>
          <div className="percentIcon"></div>
        </div>
        <div className="smallFollowerText">Followers</div>
      </div>
    </div>
  );
}
