import React, { Component } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import portfolio from "../profile.json";


class App extends Component{
 state = { portfolio };


 render() {
  return (
    <div id="contact">
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Project Portfolio</h1>
<div className="row">
{this.state.portfolio.map(portfolio => (
          <Card id="card"

            id={portfolio.id}
            key={portfolio.id}
            name={portfolio.name}
            image={portfolio.image}
            github={portfolio.github}
            deployed={portfolio.deployed}
          />
 ))}
</div>
        
       



      </Container>
    </div>
  );

 }
}


 

export default App;
