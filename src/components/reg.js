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

import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MuiPhoneNumber from "material-ui-phone-number";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import amber from "@material-ui/core/colors/amber";
import axios from "axios";

const amberTheme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

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

export default function Reg() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [orgname, setOrgName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [postcode, setPostCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [authorization, setAuthorization] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    axios
      .post(`/api/location`, {
        firstname: firstname,
        lastname: lastname,
        orgname: orgname,
        address: address,
        city: city,
        suburb: suburb,
        postcode: postcode,
        phone: phone,
        email: email,
        authorization: authorization,
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          console.log(res.data);
          history.push("/pages/location/" + res.data.insertId);
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

  const updateOrgName = (e) => {
    setOrgName(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
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

  const updateAuthorization = (e) => {
    setAuthorization(e.target.value);
  };

  const body = (
    <ThemeProvider theme={amberTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={getModalStyle()} className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register Business/Organization
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="orgname"
                  label="Business/Organization Name"
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
                  id="StreetAddress"
                  label="StreetAddress"
                  name="StreetAddress"
                  value={address}
                  onChange={updateAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="City/Town"
                  label="City/Town"
                  name="City/Town"
                  autoComplete="City"
                  value={city}
                  onChange={updateCity}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="PostCode"
                  label="Post Code"
                  name="Post Code"
                  autoComplete="PostCode"
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
                  name="authorization"
                  label="Authorization yes/no"
                  type="authorization"
                  id="authorization"
                  value={authorization}
                  onChange={updateAuthorization}
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
                Get Location I.D
              </Button>

              <Grid container justify="center">
                <Grid item>
                  <Link to="#" variant="body2">
                    Click Here to view privacy statement
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
          padding: "5px 10%",
          fontSize: "21px",
        }}
        size="large"
        variant="contained"
        type="button"
        onClick={handleOpen}
      >
        Register Business
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
