import React from "react";
import shortid from "shortid";
import ListView from "../list-view";
import TableView from "../table-view";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controller";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "emad",
        text: "Emad study in CSE",
        description: "simple description for Emad",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "mukit",
        text: "Mukit study in ME",
        description: "simple description for Mukit",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "waliul",
        text: "Waliul study in BBA",
        description: "simple description for wali",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "mahim",
        text: "Mahim bhai study in CSE",
        description: "simple description for mahim",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "Rifat",
        text: "Rifat study in EEE",
        description: "simple description for rifat",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "atik",
        text: "Atik study in MBBS",
        description: "simple description for atik",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
    color1: false,
    color2: false,
    color3: false,
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (filter) => {
    this.setState({ filter });
    if (filter === "all") {
      this.setState({
        color1: !this.state.color1,
        color2: false,
        color3: false,
      });
    } else if (filter === "running") {
      this.setState({
        color2: !this.state.color2,
        color1: false,
        color3: false,
      });
    } else {
      this.setState({
        color3: !this.state.color3,
        color1: false,
        color2: false,
      });
    }
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      filter: "all",
      searchTerm: "",
      view: "list",
      isOpenTodoForm: false,
      color1: false,
      color2: false,
      color3: false,
    });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          view={this.state.view}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          color1={this.state.color1}
          color2={this.state.color2}
          color3={this.state.color3}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        <div>{this.getView()}</div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
