/*!
 * Created by He on 2017/8/31.
 * E-mail:h@strawtc.cn
 */
import React, { Component } from 'react';
import style from './style.scss';
import Screen from '../../../../containers/Screen';

class ContentTopbody extends Component {
  render() {
    return (
      <div className={style.body}>
        <Screen />
      </div>
    );
  }
}

export default ContentTopbody;
