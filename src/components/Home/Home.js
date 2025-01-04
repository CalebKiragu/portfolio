import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const buttonStyle = {
    background: "#FF0000",
    border: "none",
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    margin: "10px",
    fontSize: "16px",
    lineHeight: "1.5",
    width: "70%",
    marginX: "30%",
    maxWidth: "400px",
  };

  const bioStyle = {
    lineHeight: "1.6",
    paddingBottom: "15px",
    textAlign: "left",
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h5 style={bioStyle}>
                I am a gifted software engineer and mathematician passionate
                about blockchain technology, with expertise in core principles
                such as digital signatures, consensus mechanisms, and game
                theory. My work focuses on designing and implementing
                cutting-edge solutions on leading blockchain platforms,
                including:
                <ul>
                  <li>Bitcoin</li>
                  <li>Ethereum</li>
                  <li>Solana</li>
                  <li>ICP</li>
                  <li>Polkadot</li>
                </ul>
                Before transitioning to Web3, I gained significant experience as
                a Web2 developer, building robust solutions for startups. My
                technical skill set includes:
                <ul>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>React & React Native</li>
                  <li>Rust</li>
                </ul>
                I am also well-versed in cloud platforms such as AWS and Azure,
                enabling scalable and secure application deployments. As the
                founder of{" "}
                <span style={{ cursor: "pointer" }}>
                  <a style={{ cursor: "pointer" }} href="https://pesatoken.org">
                    Pesa Token
                  </a>
                </span>
                , we are driving the adoption of Web3 technologies by offering a
                USSD-accessible crypto wallet, bridging the gap between Web2
                familiarity and Web3 innovation.
                <br></br>
                <br></br>
                Our efforts aim to ease the financial transition and foster mass
                adoption of blockchain technologies. In addition to our
                development work, we specialize in tokenomics and launch
                strategy. I serve as a trusted advisor to crypto projects,
                providing guidance on token design and launch strategies to
                ensure successful rollouts.
                <br></br>
                <br></br>
                Through my work, I remain committed to leveraging blockchain's
                potential to revolutionize financial systems and drive
                innovation in the crypto space.
              </h5>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
