import React, { useContext, useRef, useState } from 'react';
import Card from "react-bootstrap/Card";
import { AccountContext } from "components/Account";

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { getSession, authenticate } = useContext(AccountContext);
    const messageRef = useRef();


    const changePassword = async(e) => {
        const session = await getSession();
        const user = session.user;
        const email = session.email;

        try {
            await authenticate(email, password);
        } catch (error) {
            messageRef.current.innerHTML = `<div class="alert alert-danger mt-3">User is Not Authorized! Wrong Current Password</div>`;
            return;
        }

        user.changePassword(password, newPassword, (error, result) => {
            if(error) {
                messageRef.current.innerHTML = `<div class="alert alert-danger mt-3">${error.name}</div>`;
                return;
            }
            messageRef.current.innerHTML = `<div class="alert alert-success mt-3">${result}</div>`;
        });

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await changePassword();
    };

    return (
        <Card
            bg="gradient-info"
            text="light"
            className="col-6 mx-auto mt-5"
        >
            <Card.Header className="bg-transparent">
                <h3 className="text-uppercase">Change Password</h3>
            </Card.Header>
            <Card.Body>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="password">Current Password</label>
                        <input type="password" className="form-control" id="password"
                               value={password} placeholder="Current Password"
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">Password</label>
                        <input type="password" className="form-control" id="newPassword"
                               value={newPassword} placeholder="New Password"
                               onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-secondary">Confirm</button>
                </form>
                <div className="message" ref={messageRef}/>
            </Card.Body>
        </Card>
    );
};

export default ChangePassword;
