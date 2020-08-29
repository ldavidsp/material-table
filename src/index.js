import "./utils/polyfill";
import React from "react";
import { defaultProps } from "./default-props";
import { propTypes } from "./prop-types";
import MaterialTableSlzno from "./material-table-slzno";
import withStyles from "@material-ui/core/styles/withStyles";

MaterialTableSlzno.defaultProps = defaultProps;
MaterialTableSlzno.propTypes = propTypes;

export { MaterialTableSlzno as MTable };

const styles = (theme) => ({
  paginationRoot: {
    width: "100%",
  },
  paginationToolbar: {
    padding: 0,
    width: "100%",
  },
  paginationCaption: {
    display: "none",
  },
  paginationSelectRoot: {
    margin: 0,
  },
});

export default withStyles(styles, { withTheme: true })((props) => (
  <MaterialTableSlzno {...props} ref={props.tableRef} />
));
export * from "./components";
