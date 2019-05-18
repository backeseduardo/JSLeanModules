
import React, { Component } from 'react';
import Image from "../Image";

class ImageList extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>

        <h1>Imagens</h1>

        {this.props.imgs.map((img, index) => (
          <Image key={index} img={img} />
        ))}

      </div>
    );
  }
}

export default ImageList;