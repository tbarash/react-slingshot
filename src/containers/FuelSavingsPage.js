import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
//import FuelSavingsForm from '../components/FuelSavingsForm';

class FuelSavingsPage extends Component {
  render() {
    const {counter} = this.props.fuelSavings;
    return (
      <div>
        <h1> hello {counter} </h1>
      </div>
    );
  }
}

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
