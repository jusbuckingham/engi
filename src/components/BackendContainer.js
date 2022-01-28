import React, { Component } from 'react';
import axios from 'axios';
// import './BackendContainer.css';
import Backend from './Backend';
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
                    data: response.data.BackendsArray,
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
                comments={a.comments}

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