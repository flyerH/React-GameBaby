/*!
 * Created by He on 2017/8/30.
 * E-mail:h@strawtc.cn
 */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBlank, setSnakeDir, setKeyCode } from '../../../action';
import style from './style.scss';

class ContentBottom extends Component {
  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick(e) {
    switch (e.target.id) {
      case 'topButton':
        this.props.setSnakeDir(38);
        break;
      case 'rightButton':
        this.props.setSnakeDir(39);
        break;
      case 'bottomButton':
        this.props.setSnakeDir(40);
        break;
      case 'leftButton':
        this.props.setSnakeDir(37);
        break;
      case 'rotateButton':
        this.props.setKeyCode(13);
        break;
      default:
    }
  }

  render() {
    return (
      <div className={style.contentBottom} onClick={this.buttonClick} role="presentation">
        <div className={style.topButton} id="topButton">
          <FormattedMessage
            id="topButton"
            description="top button"
            defaultMessage="Top"
          >
            {
              msg => (
                <p className={style.buttonTip}>
                  {msg}
                </p>
              )
            }
          </FormattedMessage>
          <div className={style.buttonDir} />
        </div>
        <div className={style.rightButton} id="rightButton">
          <FormattedMessage
            id="rightButton"
            description="right button"
            defaultMessage="Right"
          >
            {
              msg => (
                <p className={style.buttonTip}>
                  {msg}
                </p>
              )
            }
          </FormattedMessage>
          <div className={style.buttonDir} />
        </div>
        <div className={style.bottomButton} id="bottomButton">
          <FormattedMessage
            id="bottomButton"
            description="bottom button"
            defaultMessage="Bottom"
          >
            {
              msg => (
                <p className={style.buttonTip}>
                  {msg}
                </p>
              )
            }
          </FormattedMessage>
          <div className={style.buttonDir} />
        </div>
        <div className={style.leftButton} id="leftButton">
          <FormattedMessage
            id="leftButton"
            description="left button"
            defaultMessage="Left"
          >
            {
              msg => (
                <p className={style.buttonTip}>
                  {msg}
                </p>
              )
            }
          </FormattedMessage>
          <div className={style.buttonDir} />
        </div>
        <div className={style.rotateButton} id="rotateButton">
          <FormattedMessage
            id="rotateButton"
            description="rotate button"
            defaultMessage="Rotate"
          >
            {
              msg => (
                <p className={style.buttonTip}>
                  {msg}
                </p>
              )
            }
          </FormattedMessage>
          <span className={style.rotateArrowLeft} >
            <span className={style.rotateArrowBody} />
          </span>
          <span className={style.rotateArrowRight} >
            <span className={style.rotateArrowBody} />
          </span>
        </div>
      </div>

    );
  }
}

ContentBottom.propTypes = {
  setBlank: PropTypes.func.isRequired,
  setSnakeDir: PropTypes.func.isRequired,
  setKeyCode: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  snakeDir: state.get('snakeDir'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setBlank, setSnakeDir, setKeyCode,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentBottom);

