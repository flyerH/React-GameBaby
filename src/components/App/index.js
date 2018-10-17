/*!
 * Created by He on 2017/8/29.
 * E-mail:h@strawtc.cn
 */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { FormattedMessage } from 'react-intl';
import BackgroundLeft from '../Background/Left';
import Content from '../Content';
import style from './style.scss';
import BackgroundRight from '../Background/Right';

class App extends Component {
  constructor() {
    super();
    this.state = {
      winWidth: document.documentElement.clientWidth,
      winHeight: document.documentElement.clientHeight,
      scaleCount: `scale(${document.documentElement.clientHeight / 950})`,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    console.log(`clientWidth: ${document.documentElement.clientWidth}`);
    console.log(`clientHeight: ${document.documentElement.clientHeight}`);
    console.log(`bodyHeight: ${document.body.clientHeight}`);
    console.log(`innerHeight: ${window.innerHeight}`);
    this.setState({
      winWidth: document.documentElement.clientWidth,
      winHeight: document.documentElement.clientHeight,
    });
  }

  render() {
    let scale = 0;
    let top = 0;
    if (this.state.winHeight / this.state.winWidth < 1.46) {
      scale = window.innerHeight / 950;
      top = 0;
    } else {
      scale = this.state.winWidth / 650;
      top = Math.round((this.state.winHeight - Math.round(this.state.winWidth * 1.46)) / scale / 2);
    }
    return (
      <div className={style.app} style={{
 transform: `scale(${scale})`, paddingTop: top === 0 ? '' : top, paddingBottom: top === 0 ? '' : top, marginTop: top === 0 ? '' : -475 - top 
}}>
        <BackgroundLeft />
        <Content />
        <BackgroundRight />
      </div>
    );
  }
}

export default hot(module)(App);
