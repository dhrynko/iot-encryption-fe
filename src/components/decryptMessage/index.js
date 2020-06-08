import React from 'react';
import axios from "axios";

// const encrypt = () => {
//     const messageElement = document.getElementById("messageType");
//     const messageType = getSafe(['selectedValue', 'value'], messageElement);
//     const key = document.getElementById("encryptionKey").value;
//     const algorithm = document.getElementById("algChoice").selectedValue;
//     const message = messageType === "db"
//         ? document.getElementById("messagePicker").selectedValue
//         : document.getElementById("textArea").value;
//
//     console.log({
//         messageType,
//         message,
//         key,
//         algorithm
//     });
//
//     if (messageType && key && message && algorithm) {
//         const id = messageType === 'db'
//             ? document.getElementById("messagePicker").messageId
//             : undefined;
//
//         console.log({ id });
//
//         const response = messageType === 'db'
//             ? axios.post(
//                 `https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages/encrypt/${id}`,
//                 {
//                     encryption_algorithm: algorithm,
//                     encryption_key: key
//                 })
//             : axios.post(
//                 "https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages/ui/encrypt",
//                 {
//                     encryption_algorithm: algorithm,
//                     encryption_key: key,
//                     message
//                 });
//
//         response.then(({data}) => alert(data["cypher"] || data))
//     } else {
//         alert("Something is missing")
//     }
//
//     return;
// };

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

    return;
};

function DecryptMessage() {
    return (
        <div className="block">
            <button onClick={decrypt}>Decrypt</button>
        </div>
    )
}

export default DecryptMessage;
