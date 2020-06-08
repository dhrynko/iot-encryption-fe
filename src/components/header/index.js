import React from 'react';
import { PageHeader } from "antd";

const header = ({pageTitle}) => {
    return (
        <PageHeader onBack={() => window.history.back()} title={pageTitle} className="ant-page-header.header"/>
    )
};

export default header;
