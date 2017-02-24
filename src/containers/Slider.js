import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/sliderActions';
import {getSliderState} from '../selectors/sliderSelector';


class Slider extends Component {

  componentWillMount() {
    const {loadReports} = this.props;
    loadReports();
  }

  render() {
    const {reports} = this.props;
    return (
      <div className="slider">
        {
          reports.map((report, index) =>
            <h1 key={index}> hello {report.name} </h1>
          )
        }
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
