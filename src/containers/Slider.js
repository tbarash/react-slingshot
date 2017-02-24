import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/sliderActions';
import {getSliderState} from '../selectors/sliderSelector';
import Report from './Report';

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  componentWillMount() {
    const {loadReports} = this.props;
    loadReports();
  }

  handleToggleClick() {
    const {handleToggle} = this.props
    handleToggle()
  }

  render() {
    const {reports} = this.props;
    return (
      <div className="slider">
        <h1> Reports 75 </h1>
        <button>close</button>
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
  loadReports: PropTypes.func
};



export default connect(
  getSliderState,
  actions
)(Slider);
