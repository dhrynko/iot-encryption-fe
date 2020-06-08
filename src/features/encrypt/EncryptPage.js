import React from 'react';
import Header from '../../components/header'
import AlgorithmChoice from '../../components/algChoice'
import MessageAddition from '../../components/messageAdd'
import EncryptKey from '../../components/keyInput'
import MessagesList from '../../components/messagesList'
import EncryptMessage from '../../components/encryptMessage'

import "./EncryptPage.css"

function DecryptPage() {
    return (
        <div className="Page">
            <Header pageTitle={"Encryption"}/>
            <AlgorithmChoice/>
            <MessageAddition/>
            <EncryptKey/>
            <MessagesList/>
            <EncryptMessage/>
        </div>
    );
}

export default DecryptPage;
