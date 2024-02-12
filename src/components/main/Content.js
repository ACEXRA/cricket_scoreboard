import React from "react";
import { Container } from "react-bootstrap";
import MatchPage from "../pages/MatchPage";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";

const Content = () => {
  return (
    <Container>
      <Routes>
        <Route path="/matches" element={<MatchPage />} />
        <Route path="/matches/:id" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to="/matches" />} />
      </Routes>
    </Container>
  );
};

export default Content;
