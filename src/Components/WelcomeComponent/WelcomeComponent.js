import React from "react";
import Card from "./Card";
import img1 from "../../Assets/img1.jpg";
import classes from './WelcomeComponent.module.css';
function WelcomeComponent() {
  return (
    <div className={classes.welcomeComponent__container}>
      <div>
        <Card
          image={img1}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
      <div>
        <Card
          image={img1}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
      <div>
        <Card
          image={img1}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
      <div>
        <Card
          image={img1}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
    </div>
  );
}

export default WelcomeComponent;
