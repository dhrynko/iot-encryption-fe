import React from 'react';
import {Select} from "antd";
import axios from "axios";

import "./encryptMessage.css"

const {Option} = Select;

const getSafe = (p, o) =>
    p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o);

const encrypt = () => {
    const messageElement = document.getElementById("messageType");
    const messageType = getSafe(['selectedValue', 'value'], messageElement);
    const key = document.getElementById("encryptionKey").value;
    const algorithm = document.getElementById("algChoice").selectedValue;
    const message = messageType === "db"
        ? document.getElementById("messagePicker").selectedValue
        : document.getElementById("textArea").value;

    console.log({
        messageType,
        message,
        key,
        algorithm
    });

    if (messageType && key && message && algorithm) {
        const id = messageType === 'db'
            ? document.getElementById("messagePicker").messageId
            : undefined;

        console.log({ id });

        const response = messageType === 'db'
            ? axios.post(
                `https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages/encrypt/${id}`,
                {
                    encryption_algorithm: algorithm,
                    encryption_key: key
                })
            : axios.post(
                "https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages/ui/encrypt",
                {
                    encryption_algorithm: algorithm,
                    encryption_key: key,
                    message
                });

        response.then(({data}) => alert(data["cypher"] || data))
    } else {
        alert("Something is missing")
    }

    return 0;
};

const onChoice = (value) => {
    const element = document.getElementById("messageType");
    element.selectedValue = value;

    return value;
};

function EncryptMessage() {
    return (
        <div className="block">
            <h3>Select message source</h3>
            <Select id="messageType" onChange={(value) => onChoice(value)} labelInValue
                    style={{"margin-bottom": "5px"}}
                    placeholder="Select message source">
                <Option value="db">DB</Option>
                <Option value="form">Form</Option>
            </Select>
            <button onClick={encrypt}>Encrypt</button>
        </div>
    )
};

export default EncryptMessage;
