import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import winston from "winston";

import {initDB} from "../startup/db";
import { initCORS } from "../startup/cors";
import { initPassportJS } from "../startup/passport";
import { initLogger } from "../startup/logging";

const PORT = process.env.PORT
const app = express();
initPassportJS()
initLogger()
initDB()
initCORS(app)

app.use(
  session({
    secret: process.env.SESSION_KEY!,
    resave: false,
    saveUninitialized: false,
    // Store session on DB
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI || "mongodb://localhost:27017/test",
    }),
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => winston.info(`Server started on PORT ${PORT}`));