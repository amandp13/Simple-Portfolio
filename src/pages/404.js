import React from 'react';

import Layout from 'components/Layout';
import Container from "components/Container";
import img_gatsbyy from "assets/images/error.png";


const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <p className="cover">
          <center><img src={img_gatsbyy} alt="error pic"  width="400px" height="200px" /></center>
        </p>
        </Container>
      <h1>Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...असुविधा के लिए हमें खेद है.</p>
    </Layout>
  );
;}

export default NotFoundPage
