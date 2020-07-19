import React, { useState } from "react";
import PropTypes from "prop-types";
import Sortly, { useDrag, useDrop } from "react-sortly";
import ListItem from "../ListItem";
import "./sortableList.css";

const exampleArray = Array.from(Array(8).keys()).map((i) => {
  return {
    id: `id_${i + 1}`,
    name: `list item ${i + 1}`,
    depth: 0,
  };
});

const ItemRenderer = ({ data }) => {
  const [{ isDragging }, drag] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop();
  return (
    <ListItem drag={drag} drop={drop} data={data} isDragging={isDragging} />
  );
};

const SortableList = ({ maxDepth }) => {
  const [items, setItems] = useState(exampleArray);
  const handleChange = (newItems) => {
    setItems(newItems);
  };

  return (
    <div className="list-container">
      <Sortly items={items} onChange={handleChange} maxDepth={maxDepth || 2}>
        {(props) => <ItemRenderer {...props} />}
      </Sortly>
    </div>
  );
};

SortableList.propTypes = {
  maxDepth: PropTypes.number,
};

export default SortableList;
