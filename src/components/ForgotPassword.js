import React, { Fragment, useContext, useRef, useState } from 'react';
import { AccountContext } from "components/Account";
import Card from "react-bootstrap/Card";
import {CognitoUser} from "amazon-cognito-identity-js";
import Pool from "components/UserPool";

const ForgotPassword = () => {

    const STAGE = {
        EMAIL: 1,
        CODE: 2,
    };

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [stage, setStage] = useState(STAGE.EMAIL);
    const { authenticated, getSession } = useContext(AccountContext);
    const messageRef = useRef();
    const codeFormRef = useRef();
    const emailFormRef = useRef();

    if(authenticated) {
        return null;
    }

    const getUser = () => new CognitoUser({
        Username: email.toLowerCase(),
        Pool
    });

    // Get User Email from Session (if User is Logged In)
    getSession().then(({email}) => setEmail(email)).catch(e => {});

    const sendCode = async(e) => {
        e.preventDefault();

        const user = getUser();

        user.forgotPassword({
            onSuccess: data => {
                console.log('onSuccess', data);
            },
            onFailure: error => {
                console.log('onFailure', error);
            },
            inputVerificationCode: data => {
                console.log('inputVerificationCode', data);
                messageRef.current.innerHTML = `
                    <div class="alert alert-success mt-3">
                        If There is any record in our system, an email will be sent to:
                        <br/>
                        <b>${data.CodeDeliveryDetails.Destination}</b>
                        </div>
                `;
                codeFormRef.current.classList.add('d-none');
                setTimeout(() => setStage(2), 3000);
            }
        });
    };

    const resetPassword = async(e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            messageRef.current.innerHTML = `
                <div class="alert alert-success mt-3">
                    Entered Password Should be Identical with Confirmed Password! 
                </div>
            `;
            return;
        }

        const user = getUser();

        user.confirmPassword(code, password, {

            onSuccess: data => {
                messageRef.current.innerHTML = `
                <div class="alert alert-success mt-3">Your Password Has Successfully Updated</div>
                `;
            },
            onFailure: error => {
                messageRef.current.innerHTML = `
                <div class="alert alert-danger mt-3">${error.message}</div>
            `;
            }
        });
    };

    return (
        <Card
            bg="gradient-info"
            text="light"
            className="col-6 mx-auto mt-5"
        >
        {stage === 1 && (
            <Fragment>
                <Card.Header className="bg-transparent">
                    <h3 className="text-uppercase">Send Verification Code</h3>
                </Card.Header>
                <Card.Body>
                    <form ref={codeFormRef} onSubmit={sendCode}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                   defaultValue={email} placeholder="Enter email"
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary">Send Verification Code</button>
                    </form>
                    <div className="message" ref={messageRef}/>
                </Card.Body>
            </Fragment>
        )}

        {stage === 2 && (
            <Fragment>
                <Card.Header className="bg-transparent">
                    <h3 className="text-uppercase">Change Password</h3>
                </Card.Header>
                <Card.Body>
                    <form ref={emailFormRef} onSubmit={resetPassword}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="code" aria-describedby="codeHelp"
                                   placeholder="Enter Verification Code"
                                   value={code}
                                   onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password"
                                   placeholder="Enter Password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="confirmPassword"
                                   placeholder="Confirm Password"
                                   value={confirmPassword}
                                   onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-secondary">Change Password</button>
                    </form>
                    <div className="message" ref={messageRef}/>
                </Card.Body>
            </Fragment>
        )}
        </Card>
    );
};

export default ForgotPassword;
