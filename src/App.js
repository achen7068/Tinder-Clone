import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TinderCards from "./Component/TinderCard/TinderCards"


function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
            <switch>
                <Route path={"/chat"}>

                </Route>
                <Route path={"/"}>
                    <TinderCards/>
                    
                </Route>
            </switch>
        </Router>

    </div>
  );
}

export default App;
