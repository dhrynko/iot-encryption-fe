import React, {Component, useEffect, useState} from 'react';
import axios from 'axios'
import {Select} from 'antd';

const {Option} = Select;

const onChoice = (value, comp) => {
    const element = document.getElementById("messagePicker");
    element.selectedValue = value;
    element.messageId = comp["key"];

    return value;
};

const Messages = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState([]);
    useEffect(() => {
        axios.get("https://9ura21435g.execute-api.eu-west-1.amazonaws.com/dev/messages/encrypted")
            .then(({data}) => {
                setIsLoaded(true);
                setItems(data)
            })
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Select id="messagePicker" placeholder="Choose message" onChange={(value, key) => onChoice(value, key)}>
                {data.map(it => {
                    return <Option key={it.uid} value={it.message || it.cypher}>{it.message || it.cypher}</Option>
                })}
            </Select>
        )
    }
};

class messagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div className="block">
                <h3>Messages List</h3>
                <button onClick={this._onButtonClick} style={{"margin-bottom": "5px"}}>Show</button>
                {console.log(this.state.showComponent)}
                {
                    this.state.showComponent ?
                        <Messages/> :
                        null
                }
            </div>
        )
    }
}

export default messagesList;
