import React from 'react';
import axios from 'axios'
import {Input} from 'antd';

import './mesageAdd.css'

const {TextArea} = Input;

const addMessageToDB = async () => {
    const message = document.getElementById("textArea").value;

    return await axios.post("https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages", {
        message
    });
};

const messageAdd = () => {
    return (
        <div className="block">
            <TextArea id="textArea"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                      style={{ width: '50%', "margin-bottom": "5px" }}
                      placeholder="Type message and click 'Add message' to save it to DB, or type and leave it as at is to encrypt from this form" />
            <button onClick={addMessageToDB}>Add message</button>
        </div>
    )
};

export default messageAdd;
