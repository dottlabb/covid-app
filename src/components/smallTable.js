import React, { useEffect } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import amber from "@material-ui/core/colors/amber";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    borderRadius: 100,
  },
});
const amberTheme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

export default function SimpleTable() {
  const classes = useStyles();

  const params = useParams();

  const [rows, setRows] = React.useState([]);

  const updateTable = () => {
    axios.get(`/api/user/` + params.id + `/diary`).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setRows(res.data);
      }
    });
  };

  useEffect(updateTable, []);

  return (
    <ThemeProvider theme={amberTheme}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Activity</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.orgname}
                </TableCell>
                <TableCell align="right">{row.activity}</TableCell>
                <TableCell align="right">{row.dateid}</TableCell>
                <TableCell align="right">{row.timeid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Grid item xs={12}>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            View Full Diary
          </Button>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
