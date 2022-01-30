import React, { Component } from 'react';
import axios from 'axios';
// import './FrontendContainer.css';
import Frontend from './Frontend';
// import FrontendComments from './frontendcomments';
const { REACT_APP_SERVER_URL } = process.env;

class FrontendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/frontend`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.frontendArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }

    displayFrontends() {
        const display = this.state.data.map((a, idx) => {
            return <Frontend
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

                {this.displayFrontends()}

            </div>
        )
    }



}


export default FrontendContainer;