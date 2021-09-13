import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
