import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Part2 from "./Pages/Part2/Part2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route exact path="/pt2" element={<Part2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
