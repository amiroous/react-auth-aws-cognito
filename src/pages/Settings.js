import React from 'react';
import BasePage from "pages/Base";
import PageHeader from "components/PageHeader";
import ChangePassword from "components/ChangePassword";
import ForgotPassword from "components/ForgotPassword";

const SettingPage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="Account Page"/>
                <ChangePassword/>
                <ForgotPassword/>
            </div>
        </BasePage>
    );
};

export default SettingPage;