import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStreamList, getStreamCategories } from "../actions/index";
import placeHolder from "../images/placeholder.png";

class StreamCategory extends React.Component {
  componentDidMount() {
    this.props.getStreamCategories();
  }

  renderList() {
    if (this.props.streamCategories.length === 0) {
      return null;
    }
    return this.props.streamCategories[0].map((item) => {
      return (
        <div className="item" key={item}>
          <Link to={`/list/${item}`}>
            <img src={placeHolder} width="130px" alt="Placeholder" />
            <div className="item-title">{item}</div>
            <div className="outer-title">{`Popular ${item}`}</div>
          </Link>
        </div>
      );
    });
  }
  render() {
    return <div className="stream-category">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streamCategories: state.streamCategories,
  };
};

export default connect(mapStateToProps, { getStreamList, getStreamCategories })(
  StreamCategory
);
