import React, { useEffect, useState } from "react";
import { Interactions } from "aws-amplify";
import { AWSLexV2Provider } from "@aws-amplify/interactions";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { AmplifyChatbot } from "@aws-amplify/ui-react";
// import { ChatBot } from "aws-amplify-react";

// Amplify.addPluggable(new AWSLexV2Provider());

function Bot() {
  const loadDataOnlyOnce = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user);
    console.log(user.attributes.email);
    const response = await Interactions.send("OrderPizza", "hi");
    console.log(response);
    console.log("loadDataOnlyOnce");
  };

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <div>
      botName="BookTrip_dev" botTitle="This is a chatbot made with Amplify"
      welcomeMessage="Hi! I was made with Amplify. How can I help you?"
    </div>
  );
}
export default Bot;
