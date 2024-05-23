import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import { Destination, Crew, Technology } from "./Pages";

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/destination" Component={Destination}></Route>
        <Route path="/crew" Component={Crew}></Route>
        <Route path="/technology" Component={Technology}></Route>
      </Routes>
    </Router>
  );
}

export default App;
