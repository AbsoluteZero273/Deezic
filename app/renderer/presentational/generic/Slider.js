import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.slider = null;
  }

  componentDidUpdate() {
    const materialSlider = this.slider.MaterialSlider;
    if (materialSlider){
      materialSlider.change(this.currentSeconds);
    }
  }

  render() {
    return (
      <input
        ref={(el) => { this.slider = el; }}
        className={`mdl-slider mdl-js-slider ${this.props.className}`} type="range"
        min="0" max={ this.props.totalSeconds } value={ this.props.currentSeconds } tabIndex="0"
        onChange={ this.props.onSlide }
        onTimeUpdate={ this.props.onTimeUpdate } />
    );
  }

}

export default Slider;
