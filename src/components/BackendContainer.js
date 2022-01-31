import React, { Component } from 'react';
import axios from 'axios';
// import './BackendContainer.css';
import Backend from './Backend';
import BackendPostForm from './BackendPostForm';
import { Link } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;


class BackendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/backend`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.backendArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }


    displayBackends() {
        const display = this.state.data.map((a, idx) => {
            return <Backend
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

                {this.displayBackends()}

            </div>
        )
    }



}


export default BackendContainer;