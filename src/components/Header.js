import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Container from "components/Container";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);
  return (
    <header>
      <Container>
        <p>{data.site.siteMetadata.author}</p>
        <ul>
          <li>
            <AniLink
              cover
              to="/"
              bg="#6666ff"
              duration={0.7}
              className="header-link"
            >
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/about/"
              bg="#E16085"
              duration={0.7}
              className="header-link"
            >
              About Me
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              to="/projects/"
              bg="#fccd04"
              duration={0.7}
              className="header-link"
            >
              Projects
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/contact/"
              bg="#00d9ff"
              duration={0.7}
              className="header-link"
            >
              Contact
            </AniLink>
          </li>
          <li>
            <AniLink
            cover
              direction="right"
              bg="#00d9ff"
              duration={0.7}
              className="header-link"
            >
               <a href="https://cvdesignr.com/p/5fdb97a082f51" target="_blank">CV</a>
               {/* <ExternalLink href="https://cvdesignr.com/p/5fdb97a082f51?hl=en_GB">CV</ExternalLink> */}
            </AniLink>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
