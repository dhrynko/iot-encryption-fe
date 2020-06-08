import React from 'react';
import Header from '../../components/header'
import AlgorithmChoice from '../../components/algChoice'
import EncryptKey from '../../components/keyInput'
import MessagesList from '../../components/encryptedMessagesList'
import DecryptMessage from '../../components/decryptMessage'

import "./DecryptPage.css"

function DecryptPage() {
    return (
        <div className="Page">
            <Header pageTitle={"Decryption"}/>
            <AlgorithmChoice/>
            <EncryptKey/>
            <MessagesList/>
            <DecryptMessage/>
        </div>
    );
}

export default DecryptPage;
