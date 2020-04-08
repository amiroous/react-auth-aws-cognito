import React from 'react';
import Table from "react-bootstrap/Table";
import HighAuth from "components/HighAuth";

const UsersTable = () => {

    return (
        <HighAuth>
            <Table striped bordered hover>
                <thead>
                <tr className="bg-info text-light">
                    <th>#</th>
                    <th>Email</th>
                    <th>Cognito ID</th>
                    <th>Confirmed</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>admin@raca.com</td>
                    <td>1234</td>
                    <td>Yes</td>
                </tr>
                </tbody>
            </Table>
        </HighAuth>
    );
};

export default UsersTable;
