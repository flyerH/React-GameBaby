/*!
 * Created by He on 2017/8/31.
 * E-mail:h@strawtc.cn
 */
/* eslint react/no-array-index-key:0 */
import React, { Component } from 'react';
import Immutable, { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dropBlock, setBlock, setBlank, runBlock, addBlock, setFood, setSnakeDir, setKeyCode } from '../../action';
import style from './style.scss';
import config from '../../../config';

class Screen extends Component {
  constructor() {
    super();
    // this.gameList = ['retro-snaker'];
    this.state = {
      isRunSnake: true,
      snakeDirection: 'right',
      foodX: 1,
      foodY: 1,
      step: 1,
    };
  }

  componentWillMount() {
    const { table } = this.props;
    this.setState(
      {
        // table: this.props.table.toJS(),
        table,
      },
      () => {
        // this.setFood();
      }
    );
  }

  componentDidMount() {
    this.initAnimation();
    window.addEventListener('keyup', event => {
      const { keyCode } = event;
      switch (keyCode) {
        /* case 13:
          this.start();
          break; */
        case 13:
          this.changeStep();
          break;

        default:
          if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
            this.props.setSnakeDir(keyCode);
          }
          break;
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyCode === 13) {
      this.props.setKeyCode(1);
      this.changeStep();
    }
  }

  /* shouldComponentUpdate(nextProps = {}) {
    return !(Immutable.is(nextProps.table, this.props.table) &&
      Immutable.is(nextProps.snake, this.props.snake));
  } */

  getRandom(min, max) {
    const num = min + Math.round(Math.random() * (max - min));
    return num;
  }

  setFood() {
    let flag = true;
    let foodX = null;
    let foodY = null;
    // this.props.setFood(this.state.foodX, this.state.foodY, 0);
    while (flag) {
      foodX = this.getRandom(0, 19);
      foodY = this.getRandom(0, 9);
      if (!this.props.table.getIn([foodX, foodY])) {
        flag = false;
      }
    }
    this.setState({
      foodX,
      foodY,
    });
    // this.props.setFood(foodX, foodY, 1);
  }

  changeStep() {
    console.log(this.state.step);
    switch (this.state.step) {
      case 1:
        clearTimeout(this.stepOneTimer);
        this.props.setBlank();
        this.setState(
          {
            step: 2,
            table: this.props.table,
          },
          this.initSnakeAnimation
        );
        break;
      case 2:
        this.setFood();
        this.setState(
          {
            table: this.props.table,
            step: 3,
          },
          this.start
        );
        break;
      default:
    }
  }

  runSnake(snake = this.props.snake) {
    /* for (let i = 0, l = this.props.snake.size; i < l; ++i) {
       this.props.setBlock(this.props.snake.getIn([i, 0]), this.props.snake.getIn([i, 1]), 0);
     } */
    this.props.setBlank(); // 清除上一次蛇的蛇身色块
    const snakeHead = snake.get(snake.size - 1);
    switch (this.props.snakeDir) {
      case 'up':
        if (Immutable.is(snakeHead, List([this.state.foodX + 1, this.state.foodY]))) {
          this.props.addBlock(this.state.foodX, this.state.foodY);
          this.setFood();
        } else {
          this.props.runBlock(this.props.snakeDir);
        }
        break;
      case 'down':
        if (Immutable.is(snakeHead, List([this.state.foodX - 1, this.state.foodY]))) {
          this.props.addBlock(this.state.foodX, this.state.foodY);
          this.setFood();
        } else {
          this.props.runBlock(this.props.snakeDir);
        }
        break;
      case 'left':
        if (Immutable.is(snakeHead, List([this.state.foodX, this.state.foodY + 1]))) {
          this.props.addBlock(this.state.foodX, this.state.foodY);
          this.setFood();
        } else {
          this.props.runBlock(this.props.snakeDir);
        }
        break;
      case 'right':
        if (Immutable.is(snakeHead, List([this.state.foodX, this.state.foodY - 1]))) {
          this.props.addBlock(this.state.foodX, this.state.foodY);
          this.setFood();
        } else {
          this.props.runBlock(this.props.snakeDir);
        }
        break;
      default:
        this.props.runBlock(this.props.snakeDir);
    }

    // this.props.runBlock(this.state.snakeDirection);
    /* for (let i = 0, l = snake.size; i < l; ++i) {
       this.props.setBlock(this.props.snake.getIn([i, 0]), this.props.snake.getIn([i, 1]), 1);
     } */
  }

  // 判断是否能够移动到蛇头前进方向的下一个方块
  canMoveHere(snake = this.props.snake) {
    const headX = snake.getIn([snake.size - 1, 0]);
    const headY = snake.getIn([snake.size - 1, 1]);
    switch (this.props.snakeDir) {
      case 'up':
        for (let i = 0, l = snake.size; i < l; ++i) {
          if (headX - 1 === snake.getIn([i, 0])) {
            if (headY === snake.getIn([i, 1])) {
              return false;
            }
          }
        }
        if (snake.getIn([snake.size - 1, 0]) - 1 >= 0) {
          return true;
        }
        break;
      case 'down':
        for (let i = 0, l = snake.size; i < l; ++i) {
          if (headX + 1 === snake.getIn([i, 0])) {
            if (headY === snake.getIn([i, 1])) {
              return false;
            }
          }
        }
        if (snake.getIn([snake.size - 1, 0]) + 1 < 20) {
          return true;
        }
        break;
      case 'left':
        for (let i = 0, l = snake.size; i < l; ++i) {
          if (headX === snake.getIn([i, 0])) {
            if (headY - 1 === snake.getIn([i, 1])) {
              return false;
            }
          }
        }
        if (snake.getIn([snake.size - 1, 1]) - 1 >= 0) {
          return true;
        }
        break;
      case 'right':
        for (let i = 0, l = snake.size; i < l; ++i) {
          if (headX === snake.getIn([i, 0])) {
            if (headY + 1 === snake.getIn([i, 1])) {
              return false;
            }
          }
        }
        if (snake.getIn([snake.size - 1, 1]) + 1 < 10) {
          return true;
        }
        break;
      default:
        return false;
    }
    return false;
  }

  start() {
    // if (true) {
    if (this.canMoveHere()) {
      // const tempTable = this.state.table;
      // 绘制 A 01 这三个字
      /* for (let i = 0, l = this.props.snake.size; i < l; ++i) {
        tempTable = tempTable.setIn([this.props.snake.getIn([i, 0]),
          this.props.snake.getIn([i, 1])], 1);
      }
      this.setState({
        table: tempTable,
      }); */
      this.runSnake();
      for (let i = 0, l = this.props.snake.size; i < l; ++i) {
        this.props.setBlock(this.props.snake.getIn([i, 0]), this.props.snake.getIn([i, 1]), 1);
      }
      this.props.setFood(this.state.foodX, this.state.foodY, 1);
      this.timer = setTimeout(() => {
        this.start();
      }, 800);
    }
  }

  initSnake() {
    for (let i = 0, l = this.props.snake.size; i < l; ++i) {
      this.props.setBlock(this.props.snake.getIn([i, 0]), this.props.snake.getIn([i, 1]), 1);
    }
    setTimeout(() => {
      //  this.setFood();
      this.start();
    }, 100);
  }

  // 选择游戏时的动画
  initSnakeAnimation() {
    for (let i = 0, l = config.snakeMenu.length; i < l; ++i) {
      this.props.setBlock(config.snakeMenu[i][0], config.snakeMenu[i][1], 1);
    }
    /* let tempTable = this.state.table; //FIXME 组件内state方法，测试完毕后删除
    // 绘制 A 01 这三个字
    for (let i = 0, l = config.snakeMenu.length; i < l; ++i) {
      tempTable = tempTable.setIn([config.snakeMenu[i][0], config.snakeMenu[i][1]], 1);
    }
    tempTable = tempTable.setIn([11, 7], 1);
    this.setState({
      table: tempTable,
    }); */
    /* for(let i=0;i<2;++i){   //TODO: 蛇的选关动画
       setT
     }
     */
  }

  // 最开始的首屏动画，2 IN 1
  initAnimation() {
    for (let i = 0, l = config.nIn1.length; i < l; ++i) {
      this.props.setBlock(config.nIn1[i][0], config.nIn1[i][1], 1);
    }
    let i = 0;

    const l = config.oneAnimation.length;
    const stepOneTimer = () => {
      if (i >= l) {
        this.props.setBlank();
        this.initAnimation();
      } else {
        this.props.setBlock(config.oneAnimation[i][0], config.oneAnimation[i][1], 1);
        i += 1;
        requestAnimationFrame(stepOneTimer);
      }
    };
    requestAnimationFrame(stepOneTimer);
  }

  render() {
    const setTable = () =>
      this.props.table.map((value, i) => (
        <div key={i} className={style.outBlock}>
          {' '}
          {value.map((value2, index2) => (
            <div
              key={index2}
              className={
                // this.state.table[i][index2] === 1 ? style.blockBlack : style.block
                this.props.table.getIn([i, index2]) === 1 ? style.blockBlack : style.block
              }
            />
          ))}
        </div>
      ));
    return (
      <div className={style.screen}>
        <div className={style.left}>{setTable()}</div>
        <div className={style.right}>Right</div>
      </div>
    );
  }
}

Screen.propTypes = {
  // table: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  table: ImmutablePropTypes.list.isRequired,
  snake: ImmutablePropTypes.list.isRequired,
  snakeDir: PropTypes.string.isRequired,
  keyCode: PropTypes.number.isRequired,
  setBlock: PropTypes.func.isRequired,
  setBlank: PropTypes.func.isRequired,
  runBlock: PropTypes.func.isRequired,
  addBlock: PropTypes.func.isRequired,
  setFood: PropTypes.func.isRequired,
  setSnakeDir: PropTypes.func.isRequired,
  setKeyCode: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  current: state.get('current'),
  table: state.get('table'),
  snake: state.get('snake'),
  snakeDir: state.get('snakeDir'),
  keyCode: state.get('keyCode'),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dropBlock,
      setBlock,
      setBlank,
      runBlock,
      addBlock,
      setFood,
      setSnakeDir,
      setKeyCode,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
