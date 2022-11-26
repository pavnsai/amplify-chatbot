import React from "react";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "0",
    message: "Welcome to react chatbot!",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: ({ value, steps }) => {
      console.log(value);
      console.log(steps);
      return "1";
    },
  },
  {
    id: "1",
    message: ({ previousValue, steps }) => {
      console.log(previousValue);
      console.log(steps);
      return "Hello";
    },
    trigger: ({ value, steps }) => {
      console.log(value);
      console.log(steps);
      return "3";
    },
  },
  {
    id: "3",
    user: true,
    end: true,
  },
];

export default function Chatbot2() {
  return (
    <div
      style={{
        marginLeft: "30%",
        marginTop: "5%",
      }}
    >
      <ChatBot steps={steps} />
    </div>
  );
}
