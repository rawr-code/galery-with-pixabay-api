import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <>
      <Banner
        title="Welcome to CSSBattle!"
        description="CSS code-golfing is here! Use your CSS skills to replicate targets with smallest possible code. Feel free to check out the targets below and put your CSS skills to test."
      />
      <Header title="Battles" />
      <Wrapper>
        <Card
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="Hosting a conference, meetup, company engineering event or just want to have some nerd fun? Create your own battles with custom targets, leaderboards, and duration! Read more about Custom Battles"
        />
        <Card
          slider
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="8 targets (2 per week) to battle out over 4 weeks and win some cool rewards! 🔥"
        />
        <Card
          slider
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="8 targets (2 per week) to battle out over 4 weeks and win some cool rewards! 🔥"
        />
        <Card
          slider
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="8 targets (2 per week) to battle out over 4 weeks and win some cool rewards! 🔥"
        />
        <Card
          slider
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="8 targets (2 per week) to battle out over 4 weeks and win some cool rewards! 🔥"
        />
        <Card
          slider
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="8 targets (2 per week) to battle out over 4 weeks and win some cool rewards! 🔥"
        />
        <Card
          slider
          title="Introducing Custom Battles"
          info="Sign In / Sign Up to host a battle"
          description="8 targets (2 per week) to battle out over 4 weeks and win some cool rewards! 🔥"
        />
      </Wrapper>
    </>
  );
};

export default Home;
