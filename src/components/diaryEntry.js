import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";

import amber from "@material-ui/core/colors/amber";
import axios from "axios";

const amberTheme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 15,
  },
}));

export default function Reg() {
  const classes = useStyles();
  const urlParams = useParams();

  const [LocationID, setLocationID] = React.useState("");
  const [orgname, setOrgName] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [city, setCity] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [dateid, setDateId] = React.useState("");
  const [timeid, setTimeId] = React.useState("");

  const handleSubmit = (e) => {
    axios
      .post(`/api/diary`, {
        UserID: urlParams.id,
        LocationID: LocationID,
        orgname: orgname,
        activity: activity,
        city: city,
        suburb: suburb,
        dateid: dateid,
        timeid: timeid,
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          setTimeout(() => window.location.reload(), 1000);
        }
      });

    e.preventDefault();
  };

  const updateLocationID = (e) => {
    setLocationID(e.target.value);
    axios.get(`/api/location/` + e.target.value).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setOrgName(res.data.orgname);
        setCity(res.data.city);
        setSuburb(res.data.suburb);
      }
    });
  };

  const updateOrgName = (e) => {
    setOrgName(e.target.value);
  };

  const updateActivity = (e) => {
    setActivity(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateSuburb = (e) => {
    setSuburb(e.target.value);
  };

  const updateDateId = (e) => {
    setDateId(e.target.value);
  };

  const updateTimeId = (e) => {
    setTimeId(e.target.value);
  };

  return (
    <ThemeProvider theme={amberTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Typography component="h1" variant="h5">
          Diary Entry
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="LocationNumber"
                name="LocationNumber"
                variant="outlined"
                fullWidth
                id="LocationNumber"
                label="Location Number"
                autoFocus
                value={LocationID}
                onChange={updateLocationID}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="orgname"
                label="Place Name"
                name="orgname"
                value={orgname}
                onChange={updateOrgName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Activity"
                label="Activity"
                name="Activity"
                autoComplete="Activity"
                value={activity}
                onChange={updateActivity}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="Suburb"
                name="Suburb"
                variant="outlined"
                required
                fullWidth
                id="Suburb"
                label="Suburb/Region"
                value={suburb}
                onChange={updateSuburb}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City/Town"
                name="city"
                autoComplete="city"
                value={city}
                onChange={updateCity}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="date"
                label="Date"
                type="date"
                format="dd/mm/yyyy"
                defaultValue="2020-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={dateid}
                onChange={updateDateId}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="time"
                label="Time"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                value={timeid}
                onChange={updateTimeId}
              />
            </Grid>
          </Grid>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit Entry
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Click Here to view privacy statement
              </Link>
            </Grid>
          </Grid>
        </form>
        {/* </div> */}
      </Container>
    </ThemeProvider>
  );
}
