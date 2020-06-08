import React from 'react';
import { Select } from "antd";

import "./algChoice.css"

const { Option } = Select;

const onChoice = (value) => {
    const element = document.getElementById("algChoice");
    element.selectedValue = value;

    return value;
};

const algChoice = () => {
    return (
        <div className="block">
        <Select id="algChoice" onChange={(value) => onChoice(value)} placeholder="Select encryption algorithm">
            <Option value="AES-256">AES-256</Option>
            <Option value="DES">DES</Option>
        </Select>
        </div>
    )
};

export default algChoice;
