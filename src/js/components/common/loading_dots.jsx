import React, { Component, PropTypes } from 'react';

class LoadingDots extends Component {
  state = { frame: 1 }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }
    return <span>{text}&nbsp;</span>
  }
}

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number,
};

LoadingDots.defaultProps = {
  interval: 300, dots: 3
};

export default LoadingDots;