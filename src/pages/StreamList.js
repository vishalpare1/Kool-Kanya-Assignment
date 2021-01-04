import React from "react";
import { connect } from "react-redux";
import { getStreamList } from "../actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreamList(this.props.match.params.type);
  }

  renderList() {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }
    return this.props.streams.map((item) => {
      return (
        <div className="item" key={item.title}>
          <img src={item.images["Poster Art"].url} alt={item.title} />
          <div className="stream-title">{item.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="stream-list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { getStreamList })(StreamList);
