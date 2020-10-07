import React from "react";
import DiaryEntry from "../components/diaryEntry.js";
import SmallTable from "../components/smallTable";
import SlideShow from "../components/slideShow";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import amber from "@material-ui/core/colors/amber";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Covid Tracer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const amberTheme = createMuiTheme({ palette: { primary: amber } });

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 10,
      padding: 10,
      listStyle: "none",
    },
  },

  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: "Health Resources",
  },
  {
    title: "Privacy and Security",
  },
  {
    title: "Change Your Details",
  },
  {
    title: "Terms of Use",
  },
  {
    title: "Feedback",
  },

  {
    title: "Contact Us",
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={amberTheme}>
        {/* Hero unit */}
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            variant="h5"
            align="center"
            color="secondary"
            component="p"
          >
            It is important that if you have been in contact with some one who
            has had tested positive for covid or if you have tested positive for
            covid that you make a report
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Report Covid
            </Button>
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Card>
                <DiaryEntry />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <SmallTable />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <SlideShow />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
