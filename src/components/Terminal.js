import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      date: "",
    };

  }
  


  render() {
    return (

      <div>

        <div className="tile is-parent is-shady">
          <article className="tile is-child notification is-white">
            <p className="title">Subject:<br />{this.props.subject}</p>
            <p className="subtitle">Notes:{this.props.notes}</p>
          </article>
        </div>

      </div>
    )
  }

}

export default Terminal;