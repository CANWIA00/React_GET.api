import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import TextList from "./component/TextList";
import TextInfo from "./component/TextInfo";


function App() {
  return (
    <Router>
    <div className="mainWrapper">
      <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" exect element={<TextList/>}></Route>
            <Route path="/posts/:id" element={<TextInfo/>}></Route>
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
