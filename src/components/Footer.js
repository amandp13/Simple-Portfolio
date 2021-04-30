import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import mail from "assets/images/SVG/mail.svg";
import linked from "assets/images/SVG/linkedin.svg";
import github from "assets/images/SVG/github.svg";

import Container from "components/Container";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <Container>
        <p>Made by ❤️{data.site.siteMetadata.author}❤️ </p>
        
        <div className="footer__icons">
          
          <a
            href="https://github.com/amandp13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${github.id}`} />
            </svg>
          </a>

          <a href="mailto:amanxyx@gmail.com" rel="noopener noreferrer">
            <svg className="footer__icons-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aman-deep-5b614a190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${linked.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
