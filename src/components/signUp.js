import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import MuiPhoneNumber from "material-ui-phone-number";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import amber from "@material-ui/core/colors/amber";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const amberTheme = createMuiTheme({ palette: { primary: amber } });

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [postcode, setPostCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [contactvia, setContactVia] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    axios
      .post(`/api/user`, {
        firstname: firstname,
        lastname: lastname,
        suburb: suburb,
        postcode: postcode,
        phone: phone,
        email: email,
        password: password,
        contactvia: contactvia,
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          history.push("/pages/user/" + res.data.insertId);
        }
      });

    e.preventDefault();
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateSuburb = (e) => {
    setSuburb(e.target.value);
  };

  const updatePostCode = (e) => {
    setPostCode(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateContactVia = (e) => {
    setContactVia(e.target.value);
  };

  const body = (
    <ThemeProvider theme={amberTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={getModalStyle()} className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="firstname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstname}
                  onChange={updateFirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastname"
                  value={lastname}
                  onChange={updateLastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Suburb"
                  name="Suburb"
                  variant="outlined"
                  required
                  fullWidth
                  id="suburb"
                  label="Suburb"
                  value={suburb}
                  onChange={updateSuburb}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="PostCode"
                  label="Post Code"
                  name="PostCode"
                  autoComplete="postcode"
                  value={postcode}
                  onChange={updatePostCode}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  variant="outlined"
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"nz"}
                  value={phone}
                  onChange={updatePhone}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={updateEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={updatePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="contactvia"
                  label="Contact-via E-mail or Phone"
                  type="contactvia"
                  id="contactvia"
                  value={contactvia}
                  onChange={updateContactVia}
                />
              </Grid>

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>

              <Grid container justify="center">
                <Grid item>
                  <Link to="#" variant="body2">
                    <h3>CLICK HERE To view Privacy statement</h3>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );

  return (
    <div>
      <Button
        style={{
          borderRadius: 10,
          backgroundColor: " #fbcc09",
          padding: "5px 30%",
          fontSize: "21px",
        }}
        size="large"
        variant="contained"
        justify="space-around"
        type="button"
        onClick={handleOpen}
      >
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
