
import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <img
        src={this.props.img.imagembase64}
        style={{
          width: '320px',
          margin: '20px auto',
        }}
        alt=""
      />
    )
  }
}

export default Image;