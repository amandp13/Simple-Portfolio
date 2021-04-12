import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import mail from "assets/images/SVG/mail.svg";
import linked from "assets/images/SVG/linkedin.svg";
import github from "assets/images/SVG/github.svg";
import dribbble from "assets/images/SVG/dribbble.svg";
import insta from "assets/images/SVG/instagram.svg";
import single from "assets/images/SVG/hand-peace-o.svg";

const ContactPage = () => {
  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact Me</title>
      </Helmet>
      <Container>
        <h1>Contact Me</h1>
        <p>Let's get in touch...And trust me, I am <mark>Single.</mark></p>
        <br></br>
          <svg class="icon icon-sentiment_very_satisfied">
        <use xlinkHref={`#${single.id}`} /></svg>
<div className="contact__icon">
  <br></br>
          <a
            href="https://www.linkedin.com/in/aman-deep-5b614a190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${linked.id}`} />
            </svg>
          </a>

          <a
            href="https://github.com/amandp13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${github.id}`} />
            </svg>
          </a>
          
          <a
            href="https://api.whatsapp.com/send?phone=9431609503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${dribbble.id}`} />
            </svg>
          </a>

          <a href="mailto:amanxyx@gmail.com" rel="noopener noreferrer">
            <svg className="contact__icon-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/aman.maniac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${insta.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
