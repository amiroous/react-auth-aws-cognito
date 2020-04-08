import React, { useContext } from 'react';
import { AccountContext } from "components/Account";

const HighAuth = ({children}) => {

    const { authenticated } = useContext(AccountContext);

    if(!authenticated) {
        return null;
    }

    return children;
};

export default HighAuth;
