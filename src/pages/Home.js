import React from 'react';
import BasePage from "pages/Base";
import PageHeader from "components/PageHeader";
import Status from "components/Status";
import Auth from "components/Auth";

const HomePage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="React Authentication" subTitle="Using AWS Cognito"/>
                <Status/>
                <Auth/>
            </div>
        </BasePage>
    );
};

export default HomePage;