import dotenv from "dotenv";
dotenv.config();
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
// const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOption: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};
const handleAppStart = () => {
  console.log(`Listening on PORT ${PORT}`);
};

createConnection(connectionOptions)
  .then(() => {
    app.start(appOption, handleAppStart);
  })
  .catch((error) => {
    console.log(error);
  });
