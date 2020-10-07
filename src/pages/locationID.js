import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const AppRouter = () => (
  <BrowserRouter>
    <Route
      path="/pages/location/:parameter1/"
      render={(props) => <App {...props} />}
    />
  </BrowserRouter>
);

const App = (props) => {
  const { parameter1 } = props.match.params;
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Typography>LOCATION ID: {parameter1}</Typography>{" "}
    </div>
  );
};
ReactDOM.render(<AppRouter />, document.getElementById("root"));
export default AppRouter;
