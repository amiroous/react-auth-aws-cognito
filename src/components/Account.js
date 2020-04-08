import React, { createContext, useEffect, useState } from 'react';
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import Pool from "components/UserPool";

const AccountContext = createContext();

export default (props) => {

    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                await getSession();
                setAuthenticated(true);
            } catch (e) { /* Nothing To Handle */ }
        })();
    }, []);

    const getSession = async () => await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();

        if(!user) {
            return reject();
        }

        user.getSession((error, session) => {

            if(error) {
                return reject(error);
            }

            resolve(session);
        });
    });

    const authenticate = async (Username, Password) => await new Promise(((resolve, reject) => {
        const user = new CognitoUser({Username, Pool});
        const authDetails = new AuthenticationDetails({Username, Password});

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('signInSuccess:', data);
                setAuthenticated(true);
                resolve(data);
            },
            onFailure: error => {
                console.error('signInError:', error);
                reject(error);
            },
            newPasswordRequired: data => {
                console.log('newPasswordRequired:', data);
                resolve(data);
            }
        });
    }));

    const signOut = () => {
        const user = Pool.getCurrentUser();
        if(!user) {
            return;
        }
        user.signOut();
        setAuthenticated(false);
    };

    return (
        <AccountContext.Provider value={{
            authenticate,
            signOut,
            authenticated
        }}>
            {props.children}
        </AccountContext.Provider>
    );
};

export { AccountContext };
