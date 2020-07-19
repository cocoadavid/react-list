import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContextProvider } from "react-sortly";
import SortableList from "./SortableList";
import Header from "./Header";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
        <Header title="Drag'n'Drop Nested List" />
        <div className="container">
          <SortableList maxDepth={2} />
        </div>
      </ContextProvider>
    </DndProvider>
  );
}

export default App;
