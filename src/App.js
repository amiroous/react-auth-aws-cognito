import React from 'react';
import 'App.scss';

import Account from "components/Account";
import Status from "components/Status";
import Auth from "components/Auth";

const App = () => {

    return(
        <Account>
            <div className="min-vh-100 bg-gradient-light">
                <div className="container pt-3">
                    <h1 className="display-4">React Auth App with AWS Cognito</h1>
                    <hr className=""/>
                    <Status/>
                    <Auth/>
                </div>
            </div>
        </Account>
    );
};

export default App;
