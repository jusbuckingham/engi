import React, { Component } from 'react';

class Backend extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (

      <div>

        <div className="tile is-parent is-shady">
          <article className="tile is-child notification is-white">
            <p className="title">Subject:<br />{this.props.subject}</p>
            <p className="subtitle">Notes:{this.props.notes}</p>
            <div className="content">
              <p className="subtitle">Comments:<br />{this.props.comments}</p>
            </div>
          </article>
        </div>

      </div>
    )
  }

}

export default Backend;