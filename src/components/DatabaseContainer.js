import React, { Component } from 'react';
import axios from 'axios';
// import './DatabaseContainer.css';
import Database from './Database';
// import DatabasePostForm from './DatabasePostForm';
const { REACT_APP_SERVER_URL } = process.env;

class DatabaseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/database`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.databaseArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }

    displayDatabases() {
        const display = this.state.data.map((a, idx) => {
            return <Database
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

                {this.displayDatabases()}

            </div>
        )
    }



}

export default DatabaseContainer;