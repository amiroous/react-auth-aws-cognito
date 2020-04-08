import React, { useContext } from 'react';
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import { AccountContext } from "components/Account";

const Auth = () => {

    const { authenticated } = useContext(AccountContext);

    if(!authenticated) {
        return (
            <div className="row">
                <div className="col">
                    <SignUp />
                </div>
                <div className="col">
                    <SignIn />
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default Auth;
