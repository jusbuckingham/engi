import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Database extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (

      <div>

        <div className="tile is-parent is-shady">
          <article className="tile is-child notification is-white">
            <p className="title">{this.props.subject}</p>
            <p className="subtitle">{this.props.notes}</p>
            <div className="content">
            </div>
          </article>
        </div>

      </div>
    )
  }

}

export default Database;