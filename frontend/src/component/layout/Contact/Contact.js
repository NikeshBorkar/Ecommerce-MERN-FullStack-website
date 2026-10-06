import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div className="contactContainer">
    <MetaData title="CONTACT US" />
      <a className="mailBtn" href="mailto:nikeshborkar008@gmail.com">
        <Button>Contact: nikeshborkar008@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
