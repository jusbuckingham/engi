import React, { Component } from 'react';

class FrontendComments extends Component {

  render() {
    return (

      <div>

        <div className="tile is-parent is-shady">
          <article className="tile is-child notification is-white">
            <p className="title"><br />{this.props.subject}</p>
            <p className="subtitle">{this.props.notes}</p>
            <div className="content">
              <p className="subtitle"><br />{this.props.comments}</p>
            </div>
          </article>
        </div>

      </div>
    )
  }

}

export default FrontendComments;