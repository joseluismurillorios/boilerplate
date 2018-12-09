import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Field from '../../molecules/field';
import Button from '../../atoms/button';
import Scrollable from '../../atoms/scrollable';
import Slider from '../../organisms/carousel';
import Container from '../../atoms/container';
import Background from '../../atoms/background';

import img1 from '../../../assets/images/carousel/carousel-01.jpg';
import img2 from '../../../assets/images/carousel/carousel-02.jpg';
import img3 from '../../../assets/images/carousel/carousel-03.jpg';

function log(txt) {
  console.log(txt);
}

class Kit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.container.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    this.container.removeEventListener('resize', this.resize);
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
    // console.log(width, height);
    return (
      <Scrollable id="Kit" className="app__page" setRef={(el) => { this.container = el; }}>
        <Slider swl={() => log('swl')} swr={() => log('swr')}>
          <Background img={img1} width={width} height={height} />
          <Background img={img2} width={width} height={height} />
          <Background img={img3} width={width} height={height} />
        </Slider>
        <Container>
          <h1>Kit</h1>
          <Field id="Email" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Email2" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Email3" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Email4" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Email5" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Email6" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Email7" text="Email Address" placeholder="type your email" onKeyDown={() => {}} />
          <Field id="Password" text="Password" placeholder="type your password" onKeyDown={() => {}} type="password" />
          <Button onClick={() => {}}>Log in</Button>
          <Button onClick={() => {}}><span>Register</span></Button>
          <Link to="/">Home</Link>
        </Container>
      </Scrollable>
    );
  }
}

export default Kit;
