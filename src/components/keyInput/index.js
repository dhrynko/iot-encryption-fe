import React from 'react'
import { Input } from 'antd';

import "./keyInput.css"

const keyInput = () => {
    return(
        <div className="block">
        <Input id="encryptionKey"
               style={{ width: '50%' }}
            placeholder="Input salt (DES key should 8 symbols)"
        />
        </div>
    )
};

export default keyInput;
