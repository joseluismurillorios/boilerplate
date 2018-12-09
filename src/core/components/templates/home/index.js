import React, { Component } from 'react';

import Field from '../../molecules/field';
import Button from '../../atoms/button';
import Scrollable from '../../atoms/scrollable';
import Slider from '../../organisms/slider';
import Container from '../../atoms/container';
import Background from '../../atoms/background';

import img1 from '../../../assets/images/carousel/carousel-01.jpg';
import img2 from '../../../assets/images/carousel/carousel-02.jpg';
import img3 from '../../../assets/images/carousel/carousel-03.jpg';

function log(txt) {
  console.log(txt);
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    const { width, height } = this.container.getBoundingClientRect();
    this.setState({
      width,
      height,
    });
  }

  render() {
    const { width, height } = this.state;
    return (
      <Scrollable id="Home" className="app__page" setRef={(el) => { this.container = el; }}>
        <Slider swl={() => log('swl')} swr={() => log('swr')}>
          <Background img={img1} width={width} height={height} />
          <Background img={img2} width={width} height={height} />
          <Background img={img3} width={width} height={height} />
        </Slider>
        <Container>
          <h1>Home</h1>
          <Field id="Email" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Password" text="Password" placeholder="type your password" onKeyDown={() => {}} type="password" />
          <Button onClick={() => {}}>Log in</Button>
          <Button onClick={() => {}}><span>Register</span></Button>
        </Container>
      </Scrollable>
    );
  }
}

export default Home;
