import React from 'react';
import axios from "axios";

const decrypt = async () => {
    const key = document.getElementById("encryptionKey").value;
    const algorithm = document.getElementById("algChoice").selectedValue;
    const message = document.getElementById("messagePicker").selectedValue;

    console.log({
        message,
        key,
        algorithm
    });

    if (key && message && algorithm) {
        const id = document.getElementById("messagePicker").messageId;
        axios.post(
            `https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages/decrypt/${id}`,
            {
                encryption_algorithm: algorithm,
                encryption_key: key
            }).then(({data}) => alert(data["cypher"] || data))
    } else {
        alert("Something is missing")
    }

    return 0;
};

function DecryptMessage() {
    return (
        <div className="block">
            <button onClick={decrypt}>Decrypt</button>
        </div>
    )
}

export default DecryptMessage;
