/* eslint react/no-array-index-key:0 */
import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import style from './style.scss';

const ScreenTable = ({ table }) =>
  table.map((value, i) => (
    <div key={i} className={style.outBlock}>
      {value.map((_, index) => (
        <div
          key={index}
          className={table.getIn([i, index]) === 1 ? style.blockBlack : style.block}
        />
      ))}
    </div>
  ));

class Screen extends PureComponent {
  render() {
    const { table } = this.props;

    return (
      <div className={style.screen}>
        <div className={style.left}>
          <ScreenTable table={table} />
        </div>
        <div className={style.right}>Right</div>
      </div>
    );
  }
}

Screen.propTypes = {
  table: ImmutablePropTypes.list.isRequired,
};

const mapStateToProps = state => ({
  table: state.get('table'),
});

export default connect(
  mapStateToProps
)(Screen);
