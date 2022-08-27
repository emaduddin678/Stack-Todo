import React from "react";
import { Input, Label } from "reactstrap";
import PropTypes from "prop-types";

const ViewController = ({ view, changeView }) => (
  <div className="d-flex">
    <Label for="list-view" className="me-4">
      <Input
        type="radio"
        name="view"
        value="list"
        id="list-view"
        onChange={changeView}
        className="d-inline-block"
        checked={view === "list"}
      />
      List View
    </Label>
    <Label for="table-view" className="me-4">
      <Input
        type="radio"
        name="view"
        value="table"
        id="table-view"
        onChange={changeView}
        className="d-inline-block"
        checked={view === "table"}
      />
      Table View
    </Label>
  </div>
);

ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
