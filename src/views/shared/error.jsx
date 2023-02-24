import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Row, Col, Button } from "antd";
import errorImage from "../../assets/imgs/error.png"

const Error = () => {
  const { Text, Title } = Typography;
  const navigate = useNavigate();

  return (
    <Row>
      <Col className="error" span={24}>
        <Title level={4}>oooops, something went wrong...</Title>
        <img src={errorImage} alt="error image" srcSet="" className="error__image" />
        <Button className="error__button" type="primary" shape="round" size="large">go back to home</Button>
      </Col>
    </Row>
  )
}

export default Error;