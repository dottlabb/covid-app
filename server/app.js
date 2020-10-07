//LIBS
const crypto = require("crypto");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
//DB

function getCon() {
  const con = mysql.createConnection({
    //ESTABLISH CONNECTION TO DB - REUSED
    host: "localhost",
    user: "root",
    password: "harry",
    database: "covidapp",
  });
  return con;
}
//HASHINGs
const algorithm = "aes-256-ctr";

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, "hy78TYrwc");
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, "hy78TYrwc");
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

//API

const app = express(); // INSTANTIATE EXPRESS (SETUP)
const port = 4000;

//app.use(bodyParser.json({ type: 'application/json' }))  // Our server will look at the http requests sent and extract\parse json post data out of the body for us
app.use(express.json());

app.get("/", (req, res) => {
  //when a user hits / in their browser they will get this response
  res.send("Hello World!");
});

app.get("/tigerking", (req, res) => {
  //when a user hits / in their browser they will get this response
  res.send("I AM the tiger king!");
});

app.get("/api/location/:id", (req, res) => {
  console.log("asdad");
  const selectedId = req.params.id;
  const con = getCon();
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    console.log(req.body);
    const sql = `select * from Locations where LocationID = ${selectedId}`;
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;
      if (result.length === 0) {
        response = { error: "nolocation" };
      } else {
        response = result[0];
      }
      res.json(response);
      res.end();
      con.end();
    });
  });
});

app.get("/api/diary/:id", (req, res) => {
  console.log("asdad");
  const selectedId = req.params.id;
  const con = getCon();
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    console.log(req.body);
    const sql = `select * from Diary where DiaryID = ${selectedId}`;
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;
      if (result.length === 0) {
        response = { error: "nolocation" };
      } else {
        response = result[0];
      }
      res.json(response);
      res.end();
      con.end();
    });
  });
});

app.get("/api/user/:id/diary", (req, res) => {
  console.log("asdad");
  const con = getCon();
  const selectedId = req.params.id;
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    console.log(req.body);
    const sql = `select * from Diary where UserID = ${selectedId}`;
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;
      if (result.length === 0) {
        response = { error: "nodiaryentries" };
      } else {
        response = result;
      }
      res.json(response);
      res.end();
      con.end();
    });
  });
});

app.post("/api/login", (req, res) => {
  //when a user posts to /login
  let response = { error: "no route matched" }; // this should be overwridden, if not you will see this in your response, this probably means your control logic did not capture the case
  const con = getCon();
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    const sql = "select * from Users where email='" + req.body.email + "'"; // craft sql query to get user record
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;

      if (result.length === 0) {
        //no results came back in the query
        response = { error: "nouser" };
      } else {
        if (result[0].password !== req.body.password) {
          //passwords do not match
          response = { error: "password wrong" };
        } else {
          //yay! login succeeded
          response = result[0];
        }
      }
      res.json(response); // send the response back to the user
      res.end();
      con.end();
    });
  });
});

// create diary
// get diary /api/diary/{id}   //google express query paramaters
// post diary /api/diary/

// get /api/user/{id}
// post /api/user/

app.post("/api/user", function (req, res) {
  let response = { message: " I have not written this yet" };
  const con = getCon();
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    console.log(req.body);

    const sql = "select * from Users where email='" + req.body.email + "'"; // craft sql query to get user record
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;

      if (result.length > 0) {
        //no results came back in the query
        response = { error: "userallreadyexists" };
        res.json(response);
        res.end();
      } else {
        const sql =
          "INSERT INTO Users(firstname,lastname,suburb,postcode,phone,email,password,contactvia) VALUES ('" +
          req.body.firstname +
          "','" +
          req.body.lastname +
          "','" +
          req.body.suburb +
          "','" +
          req.body.postcode +
          "','" +
          req.body.phone +
          "','" +
          req.body.email +
          "','" +
          req.body.password +
          "','" +
          req.body.contactvia +
          "')";
        con.query(sql, function (err, result, fields) {
          //execute query
          if (err) throw err;
          response = result;
          res.json(response);
          res.end();
          con.end();
        });
      }
    });
  });
});

app.post("/api/location", function (req, res) {
  let response = { message: "fuck man I have not written this yet" };
  const con = getCon();
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    console.log(req.body);

    const sql = "select * from Locations where email='" + req.body.email + "'"; // craft sql query to get user record
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;

      if (result.length > 0) {
        //no results came back in the query
        response = { error: "locationallreadyexists" };
        res.json(response);
        res.end();
      } else {
        const sql =
          "INSERT INTO Locations(firstname,lastname,orgname,address,city,suburb,postcode,phone,email,authorization) VALUES ('" +
          req.body.firstname +
          "','" +
          req.body.lastname +
          "','" +
          req.body.orgname +
          "','" +
          req.body.address +
          "','" +
          req.body.city +
          "','" +
          req.body.suburb +
          "','" +
          req.body.postcode +
          "','" +
          req.body.phone +
          "','" +
          req.body.email +
          "','" +
          req.body.authorization +
          "')";
        con.query(sql, function (err, result, fields) {
          //execute query
          if (err) throw err;
          response = result;
          res.json(response);
          res.end();
          con.end();
        });
      }
    });
  });
});

app.post("/api/diary", function (req, res) {
  let response = { message: "fuck man I have not written this yet" };
  const con = getCon();
  con.connect(function (err) {
    //create a new conenction to the db
    if (err) throw err;
    console.log(req.body);

    const sql =
      "INSERT INTO Diary(UserID,LocationID,activity,orgname,suburb,city,dateid,timeid) VALUES ('" +
      req.body.UserID +
      "','" +
      req.body.LocationID +
      "','" +
      req.body.orgname +
      "','" +
      req.body.activity +
      "','" +
      req.body.city +
      "','" +
      req.body.suburb +
      "','" +
      req.body.dateid +
      "','" +
      req.body.timeid +
      "')";
    con.query(sql, function (err, result, fields) {
      //execute query
      if (err) throw err;
      response = { message: "yo I must of been able to save in teh dvb" };
      res.json(response);
      res.end();
      con.end();
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
