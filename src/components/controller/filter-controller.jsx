import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const FilterController = ({ handleFilter, color1, color2, color3 }) => (
  <ButtonGroup>
    <Button
      onClick={() => handleFilter("all")}
      color={color1 ? "success" : "danger"}
    >
      All
    </Button>
    <Button
      onClick={() => handleFilter("running")}
      color={color2 ? "success" : "danger"}
    >
      Running
    </Button>
    <Button
      onClick={() => handleFilter("completed")}
      color={color3 ? "success" : "danger"}
    >
      Completed
    </Button>
  </ButtonGroup>
);

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterController;
