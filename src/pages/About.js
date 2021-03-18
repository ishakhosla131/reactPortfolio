import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css"

function About() {
  return (
    <div className="about">
      <Hero backgroundImage="https://besthqwallpapers.com/Uploads/13-6-2020/135949/thumb2-painted-flowers-texture-floral-background-texture-with-flowers-painted-flowers-colorful-floral-background.jpg">
        <div className="foo">
          <h1>Isha Khosla</h1>
          <h2>Welcome to my page</h2>
        </div>
      </Hero>


      <div id="aboutme">
          <h1>About Me:</h1>
          <p>
            Hi there! I am Isha, a recent graduate of the Rutgers Coding Bootcamp. Here I learned fullstack development. I soon realized how cool and creative the world of coding really is. With a love and passion for art, I hope to have a career UI design. Until then, check out all my applications and creations. Welcome to my portfolio!
            </p>
        </div>
      <Container style={{ marginTop: 30 }}>
        



      </Container>
    </div>
  );
}

export default About;
