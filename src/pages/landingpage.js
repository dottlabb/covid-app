import React from "react";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";
import Reg from "../components/reg";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function SimpleModal() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          xs={3}
          style={{
            textAlign: "center", // this does the magic
          }}
        >
          <Box p={1}>
            <div>
              <SignIn />
            </div>
          </Box>
          <Box p={1}>
            <div>
              {" "}
              <SignUp />
            </div>
          </Box>
          <Box p={1}>
            <div>
              {" "}
              <Reg />{" "}
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
