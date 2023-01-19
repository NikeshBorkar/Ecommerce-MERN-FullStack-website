import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div className="contactContainer">
    <MetaData title="CONTACT US" />
      <a className="mailBtn" href="mailto:Nikeshborkar008@gmail.com">
        <Button>Contact: Nikeshborkar008@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
