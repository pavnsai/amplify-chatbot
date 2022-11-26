import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { AWSLexV2Provider } from "@aws-amplify/interactions";
import ChatBot from "./components/Bot";
import CHatbot2 from "./components/Chatbot2";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./components/Routers";

Amplify.configure(awsconfig);

Amplify.addPluggable(new AWSLexV2Provider());

const interactionsConfig = {
  Interactions: {
    bots: {
      OrderPizza: {
        name: "OrderPizza",
        aliasId: "TSTALIASID",
        botId: "QVFV6HUPC5",
        localeId: "en_US",
        region: "us-east-1",
        providerName: "AWSLexV2Provider",
      },
    },
  },
};

// const interactionsConfig = {
//   Interactions: {
//     bots: {
//       BookTrip_dev: {
//         name: "BookTrip_dev",
//         alias: "$LATEST",
//         region: "us-east-1",
//       },
//     },
//   },
// };
Amplify.configure(interactionsConfig);

function App() {
  return (
    <div>
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
