import React, { Component } from 'react';
import Card from './Card';
import { css } from 'react-emotion';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    const placeholder = Array.from('permanentE4youth');
    return placeholder.map(item => <Card key={item}/>);
  }

  render() {
    const galleryStyles = css`
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(5, min-content);
    `;
    return (
      <div className={galleryStyles}>
        {this.renderCards()}
      </div>
    );
  }
}

export default Gallery;