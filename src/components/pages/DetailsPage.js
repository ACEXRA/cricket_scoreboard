import React from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const param = useParams();
  return (
    <div className="details">
      <div className="details_heading">
        <h4>Scoreboard</h4>
        <div className="details_summary">
          <div className="team_overview">
            <div>team1</div>
            <div>Score</div>
          </div>
          <div className="team_overview">
            <div>Score</div>
            <div>team2</div>
          </div>
        </div>
      </div>
      <div>
        <h6>Batting</h6>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DetailsPage;
