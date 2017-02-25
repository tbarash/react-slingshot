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
    this.handleSearchChange = this.handleSearchChange.bind(this);
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

  handleSearchChange(event) {
    const {updateSearch} = this.props;
    updateSearch(event.target.value);
  }

  render() {
    const {reports, isHidden, loadReports} = this.props;
    const sliderClass = classNames({
      'slider': true,
      'hidden': isHidden
    });
    return (
      <div className={sliderClass}>

        <h1> Reports {reports.length} </h1>
        <button className="open-btn"onClick={this.handleOpen}>open</button>

        <div className="buttons">
          <button onClick={loadReports}>refresh</button>
          <button onClick={this.handleClose}>close</button>
          <div className="toggle-btn" onClick={this.handleToggleClick}/>
        </div>

        <input className="search" placeholder="search reports" type="text"  onChange={this.handleSearchChange}/>
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
  updateSearch: PropTypes.func,
  handleOpen: PropTypes.func,
  isHidden: PropTypes.bool,
  loadReports: PropTypes.func
};



export default connect(
  getSliderState,
  actions
)(Slider);
