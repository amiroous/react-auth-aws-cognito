import React from 'react';
import BasePage from "pages/Base";
import PageHeader from "components/PageHeader";
import ChangePassword from "components/ChangePassword";

const SettingPage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="Account Page" subTitle="Need Authentication"/>
                <ChangePassword/>
            </div>
        </BasePage>
    );
};

export default SettingPage;