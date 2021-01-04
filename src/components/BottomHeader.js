import React from "react";

const BottomHeader = (props) => {
  return (
    <div className="bottom-header">
      <div className="container">
        <div className="content-title">{props.title}</div>
      </div>
    </div>
  );
};

export default BottomHeader;
