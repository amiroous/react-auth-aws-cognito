import React, { Fragment, useState } from 'react';
import UserPool from "components/UserPool";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        UserPool.signUp(email, password, [], null, (error, data) => {
            if(error) {
                return console.error('signUpError: ', error);
            }
            console.log('signUpSuccess: ', data);
        });
    };

    return (
        <Fragment>
            <h3 className="text-uppercase">Sign Up</h3>
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

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </Fragment>
    );
};

export default SignUp;
