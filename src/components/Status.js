import React, { useContext } from 'react';
import { AccountContext } from 'components/Account';

const Status = () => {

    const { signOut, authenticated } = useContext(AccountContext);

    if(authenticated) {
        return(
            <div className="alert alert-info border-info d-flex justify-content-between align-items-center" role="alert">
                <div>You Are Logged In Successfully</div>
                <button
                    onClick={signOut}
                    type="button" className="btn btn-secondary">Logout</button>
            </div>
        )
    } else {
        return(
            <div className="alert alert-warning border-warning d-flex justify-content-between align-items-center" role="alert">
                <div>Please Login Bellow</div>
            </div>
        );
    }
};

export default Status;
