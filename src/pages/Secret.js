import React from 'react';
import BasePage from "pages/Base";
import PageHeader from "components/PageHeader";

const SecretPage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="Secret Page" subTitle="Need Authentication"/>
            </div>
        </BasePage>
    );
};

export default SecretPage;