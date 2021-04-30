import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/cover.png";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <Container>
        <p className="cover">
          <img src={img_gatsby} alt="Amandeep pic" />
        </p>
        <h3 className="heading">नमस्कार! Welcome to my Online World...
        <br></br><center>I am Amandeep. </center></h3>
        <center><h5 class="chic">and I just love Chicken. 🐔 </h5></center>
        <br></br>
        <p>Welcome to the online world of mine...Yes! I do Exist.</p>
        <br></br>
        <p>“What we know is a drop, what we don't know is an ocean.”- Issac Newton</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
