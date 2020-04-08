import React from 'react';
import BasePage from "pages/Base";
import PageHeader from "components/PageHeader";
import UsersTable from "components/UsersTable";

const UsersPage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="React Authentication" subTitle="Using AWS Cognito"/>
                <UsersTable/>
            </div>
        </BasePage>
    );
};

export default UsersPage;