import React, { Component } from 'react';
import axios from 'axios';
// import './TerminalContainer.css';
import Terminal from './Terminal';
// import TerminalComments from './Terminalcomments';
const { REACT_APP_SERVER_URL } = process.env;

class TerminalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/Terminal`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.terminalArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }

    displayTerminals() {
        const display = this.state.data.map((a, idx) => {
            return <Terminal
                key={idx}
                subject={a.subject}
                notes={a.notes}

            />
        });

        return display;
    }


    render() {
        return (
            <div>

                {this.displayTerminals()}

            </div>
        )
    }



}


export default TerminalContainer;