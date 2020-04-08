
import React from 'react';

const PageHeader = ({title, subTitle = null}) => {
    return (
        <h1 className="text-info display-4 my-3">
            {title} <small className="text-muted font-weight-light">{subTitle}</small>
        </h1>
    );
};

export default PageHeader;