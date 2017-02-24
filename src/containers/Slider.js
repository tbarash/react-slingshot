import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/sliderActions';
import {getSliderState} from '../selectors/sliderSelector';
import Report from './Report';
import classNames from 'classnames';

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentWillMount() {
    const {loadReports} = this.props;
    loadReports();
  }

  handleToggleClick() {
    const {handleToggle} = this.props;
    handleToggle();
  }

  handleClose() {
    const {handleClose} = this.props;
    handleClose();
  }

  handleOpen() {
    const {handleOpen} = this.props;
    handleOpen();
  }

  render() {
    const {reports, isHidden} = this.props;
    const sliderClass = classNames({
      'slider': true,
      'hidden': isHidden
    });
    return (
      <div className={sliderClass}>
        <h1> Reports 75 </h1>
        <button className="open-btn"onClick={this.handleOpen}>open</button>
        <button onClick={this.handleClose}>close</button>
        <button onClick={this.handleToggleClick}>toggle order</button>
        <div className="reports-container">
          {
            reports.map((report, index) =>
              <Report key={index} report={report}/>
            )
          }
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  reports: PropTypes.array,
  handleToggle: PropTypes.func,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  isHidden: PropTypes.bool,
  loadReports: PropTypes.func
};



export default connect(
  getSliderState,
  actions
)(Slider);
