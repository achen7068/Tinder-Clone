import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./Component/TinderCard/TinderCards"
import SwipeButtons from "./Component/SwipeButtons/SwipeButtons";
import Chats from "./Component/Chat/Chats";
import ChatScreen from "./Component/Chat/ChatScreen";



function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path={"/chat/:person"}>
                    <Header backButton={'/chat'}/>
                    <ChatScreen/>
                </Route>
                <Route path={"/chat"}>
                    <Header backButton={'/'}/>
                    <Chats/>
                </Route>
                <Route path={"/"}>
                    <Header/>
                    <TinderCards/>
                    <SwipeButtons/>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
