import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import { Auth } from "aws-amplify";
import { Button } from "@aws-amplify/ui-react";

const Home = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        marginLeft: "10%",
        marginTop: "10%",
      }}
    >
      <Button>Home page</Button>{" "}
    </div>
  );
};

export default Home;
