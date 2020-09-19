import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import IconImg from '../Image/IconImage';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { img, networks } = footer;

  return (
    <>
      <footer className="footer navbar-static-bottom">
        <Container id="logos">
          <Row className="justify-content-md-center">
            <Col>
              <IconImg alt="profile picture" filename={img} />
            </Col>
          </Row>
        </Container>

        <hr />
        <Container>
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" style={{ color: 'white' }} />
            </Link>
          </span>

          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                  </a>
                );
              })}
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
