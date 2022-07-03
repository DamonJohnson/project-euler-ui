import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useState } from "react";
import Title from "./Title";
import ProblemList from "./ProblemList"
import Leaderboard from "./Leaderboard"


function App() {

  return (
    <BrowserRouter>
      <Title />
      <ProblemList />
      <Routes>
        <Route path="problem/:id/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;