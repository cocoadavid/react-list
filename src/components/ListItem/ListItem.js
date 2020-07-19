import React from "react";
import PropTypes from "prop-types";
import "./listItem.css";

const ListItem = ({ drop, drag, data, isDragging }) => {
  return (
    <div ref={drop} className="droppable">
      <div
        className={`listItem elevated-1 ${isDragging ? "dragging" : ""}`}
        ref={drag}
        style={{
          marginLeft: data.depth * 32,
        }}
      >
        {data.name}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  drag: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isDragging: PropTypes.bool,
};

export default ListItem;
