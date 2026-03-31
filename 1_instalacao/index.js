import express from "express";
import exphbs from "express-handlebars";

const app = express();

import conn from "./db/conn.js";

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// read body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.listen(3000);
