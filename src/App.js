import React from 'react';
import 'App.scss';
import { Route } from "react-router-dom";
import HomePage from "pages/Home";
import UsersPage from "pages/Users";
import HighAuth from "components/HighAuth";

const App = () => {

    return(
        <div className="app">
            <Route exact path="/" component={HomePage} />
            <HighAuth>
                <Route exact path="/users" component={UsersPage} />
            </HighAuth>
        </div>
    );
};

export default App;
