import React from "react";
import MatchContainer from "../items/MatchContainer";

const MatchPage = () => {
  const arr = [1, 2];
  return (
    <>
      {arr.map((id) => {
        return <MatchContainer key={id} />;
      })}
    </>
  );
};

export default MatchPage;
