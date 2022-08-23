import React from "react";
import ListView from "../list-view";
import TableView from "../table-view";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "emad",
        text: "main todo text",
        description: "simple description for Emad",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "mukit",
        text: "main todo text",
        description: "simple description for Mukit",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
  };

  toggleSelect = (todoId) => {};

  toggleComplete = (todoId) => {};

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <div>
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
