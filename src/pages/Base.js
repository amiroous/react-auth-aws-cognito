import React, { Fragment } from 'react';
import NavBar from "components/NavBar";

const BasePage = ({children}) => {

    return (
        <Fragment>
            <NavBar/>
            {children}
        </Fragment>
    );
};

export default BasePage;