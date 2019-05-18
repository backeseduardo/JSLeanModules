import React, { Component } from 'react';
import './App.css';

import { connect } from "./modules/api";
import ImageList from "./modules/ImageList";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imgs: []
    };

    connect(this);
  }

  receiveImages(imgs) {
    console.log(imgs);
    this.setState({ imgs });
  }

  receiveImage(img) {
    console.log(img);

    this.setState({
      imgs: [img].concat(this.state.imgs)
    })
  }

  render() {
    return (
      <ImageList imgs={this.state.imgs} />
    );
  }
}

export default App;