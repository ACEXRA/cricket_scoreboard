import React from "react";
import { useNavigate } from "react-router-dom";

const MatchContainer = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/matches/${23}`);
  };
  return (
    <div className="match_container" onClick={clickHandler}>
      <div className="d-flex justify-content-between">
        <h5>Head</h5>
        <h5>Date</h5>
      </div>
      <div>Match details</div>
      <div className="d-flex justify-content-between">
        <div>
          <div>Team 1</div>
          <div>Team 2</div>
        </div>
        <div>
          <div>Score 1</div>
          <div>Score 2</div>
        </div>
      </div>
      <div>Match result</div>
    </div>
  );
};

export default MatchContainer;
