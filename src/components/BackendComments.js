import React, { Component } from 'react';

class BackendComments extends Component {

  render() {
    return (

      <div>

        <div className="tile is-parent is-shady">
          <article className="tile is-child notification is-white">
            <p className="title">{this.props.username}</p>
            <p className="subtitle">{this.props.comment}</p>
            <div className="content">
              <p className="subtitle">{this.props.date}</p>
            </div>
          </article>
        </div>

      </div>
    )
  }

}

export default BackendComments;