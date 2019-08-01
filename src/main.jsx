import React from 'react';
import Header from './header';
import BannerSlide from './bannerSlide';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePosition: 0,
      active: ''
    };
    this.toggleSlideClick = this.toggleSlideClick.bind(this);
  }

  startToggleSlideAuto() {
    this.timerID = setInterval(() => this.toggleSlideAuto(), 4000);
    setTimeout(() => {
      this.setState({ active: ' active' });
    }, 10);
  }

  componentDidMount() {
    this.startToggleSlideAuto();
  }

  toggleSlideAuto() {
    const { slidePosition } = this.state;
    this.setState({
      slidePosition: slidePosition < 400 ? slidePosition + 100 : 0,
      active: ' active'
    });
  }

  toggleSlideClick(num) {
    return () => {
      clearInterval(this.timerID);
      this.setState({ slidePosition: num });
      this.startToggleSlideAuto();
    };
  }

  render() {
    const { slidePosition, active } = this.state;
    return (
      <div className="root_content">
        <Header />
        <BannerSlide
          slidePosition={slidePosition}
          forButtonsOnClick={this.toggleSlideClick}
          active={active}
        />
      </div>
    );
  }
}
