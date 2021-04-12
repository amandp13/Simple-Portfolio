import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Container>
        <h1>About Me</h1>
        <p>My name is <b><mark>Amandeep</mark></b> and i am currently pursuing  
         <strong> B.Tech 🎓</strong> in <b>CSE</b> from <b>DIT University</b>, Dehradun, India. </p>
         <br></br>
         <p>✨ I am basically a learner and i like to learn new skills! ✨</p>
         
         <p>✔️ I love to play Cricket and chess and maintain entertainment in life by watching movies.</p>
         <p>✔️ I would describe myself as passionate, hard-working, optimistic, team-oriented person. </p>
         <p><em>And i hate Fish.</em> 🐟</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
