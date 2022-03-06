/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default function () {
  return (
    <div className="iconCardBox">
      <div className="iconCard">
        <div className="iconPhoto"></div>
        <h2 className="iconName">Ryan Septimus</h2>
        <p className="socialHandle">@rayn.septimus</p>
        <div className="followerCountSection">
          <h3 id="numbers">193</h3>
          <h3 id="numbers">17,536</h3>
          <h3 id="numbers">274</h3>
        </div>
        <div className="followerCountText">
          <p id="type">Post</p>
          <p id="type">Followers</p>
          <p id="type">Following</p>
        </div>
      </div>
    </div>
  );
}
