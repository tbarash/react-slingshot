import React, {PropTypes, Component} from 'react';



class Report extends Component {

  render() {
    const {report} = this.props;

    const date = new Date(report.updated * 1000);
    const locale = "en-us";
    const month = date.toLocaleString(locale, {month: "short"});
    const hour = date.toLocaleString(locale, { hour: 'numeric',minute:'numeric', hour12: true });

    return (
      <div className="report">
        <div className="left">
          <span>{report.name}</span>
          <span>{report.type}@{report.location}</span>
        </div>


        <div className="time">
          <span> {month} {date.getDate()}</span>
          <span> {hour}</span>
        </div>
      </div>
    );
  }
}

Report.propTypes = {
  report: PropTypes.object
};



export default Report;
