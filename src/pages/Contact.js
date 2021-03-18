import React, { Component } from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import Img from "../components/images/img1.jpg";
import "./style.css"



function Contact() {
  return (
    <div id="contact">
      <Container  style={{ minHeight: "80%" }}>
        <div className="row">
          <div className = "col-md-12">
          <h1 className="text-center">Contact Me</h1>  
          </div>
        </div>
        
        <div className="row">     
        <div className="col-md-6">
          <img src={Img} alt="digital drawing" className="img-fluid"></img>
        </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </Container>
    </div>
  );
}


export default Contact;
