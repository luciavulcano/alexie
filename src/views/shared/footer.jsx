import { React } from "react";
import { Typography, Row, Col } from "antd";
import Logo from "../../assets/imgs/logo.png";
import gitHubIcon from "../../assets/imgs/github.png";
import linkedinIcon from "../../assets/imgs/linkedin.png";

const Footer = () => {
  const { Title, Text } = Typography;
  return (
    <footer className="footer">
      <Row>
        <Col span={12}>
          <span className="footer__header">
            <img src={Logo} alt="icon of the alexie application" className="footer__logo" />
            <Title level={2} className="footer__h2">
              alexie
            </Title>
          </span>
        </Col>
        <Col span={12}>
          <Text type="secondary">
            project developed for the full stack web development course at
            PUC-MG
          </Text>
          <br />
          <br />
        </Col>
      </Row>
      <Row className="footer__box">
        <Text type="secondary">developed by Lúcia Vulcano de Andrada</Text>
        <span>
          <a
            href="https://www.linkedin.com/in/luciavulcano/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__box__link"
          >
            <img src={linkedinIcon} alt="icon for linkedin" />
          </a>
          <a
            href="https://github.com/luciavulcano"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__box__link"
          >
            <img src={gitHubIcon} alt="icon for github" />
          </a>
        </span>
      </Row>
    </footer>
  );
};

export default Footer;
