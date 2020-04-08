import React, { Fragment, useContext, useState } from 'react';
import { AccountContext } from 'components/Account';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await authenticate(email, password);
        } catch (error) { }
    };

    return (
        <Fragment>
            <h4 className="text-uppercase">Sign In</h4>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                           value={email} placeholder="Enter email"
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                           value={password} placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-info">Sign In</button>
            </form>
        </Fragment>
    );
};

export default SignIn;
