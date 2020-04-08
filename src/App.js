import React from 'react';
import 'App.scss';
import { Route } from "react-router-dom";
import HomePage from "pages/Home";
import SecretPage from "pages/Secret";
import HighAuth from "components/HighAuth";

const App = () => {

    return(
        <div className="app">
            <Route exact path="/" component={HomePage} />
            <HighAuth>
                <Route exact path="/secret" component={SecretPage} />
            </HighAuth>
        </div>
    );
};

export default App;
