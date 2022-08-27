import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.js";
import Question from "./pages/Question";
import Result from "./pages/Result";
import Loading from "./pages/Loading";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();
  return (
    <TransitionGroup className={"transitions-wrapper"}>
      <CSSTransition key={location.key} timeout={2000} classNames="right">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
