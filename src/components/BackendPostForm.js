// import "./PostForm.css";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;


class BackendPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            notes: "",
        };
    }
    handleSubject(e) {
        this.setState({
            subject: e.target.value,
        });
    }
    handleNotes(e) {
        this.setState({
            notes: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            subject: this.state.subject,
            notes: this.state.notes,
        };
        axios
            .post(`${REACT_APP_SERVER_URL}/backend/new`, newNote)
            .then((response) => {
                this.setState({
                    redirect: true,
                });
            })
            .catch((error) => console.log("===> Error in Form", error));
    };


    render() {
        if (this.state.redirect) return <Redirect to="/backend" />; // You can have them redirected to profile (your choice)
        
        return (
            <div>
                <h1>Add Backend Subject</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>
                            Subject
                            <br />
                            <input type="text" name="Title"
                                value={this.state.subject} onChange={this.handleSubject.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <div>
                        <label>
                            Notes
                            <br />
                            <input id="description" type="text" name="Description"
                                value={this.state.notes} onChange={this.handleNotes.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <div>
                        <label>
                            Payment
                            <br />
                            <input type="text" name="Price"
                                value={this.state.post_text} onChange={this.handlePayment.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <input type="submit" value="Submit Post" />
                </form>
            </div>
        );
    }
};



export default BackendPostForm;