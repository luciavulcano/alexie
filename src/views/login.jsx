import { React, useState } from "react";
import { Col, Row, Input, Typography, Form, Button } from "antd";
import {
  GoogleOutlined
} from '@ant-design/icons';
import useLoginStore from "../store/loginStore";
import generateBackendURL from "../services/generateBackendURL";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../services/backendRoutes";
import http from "../services/http";

const Login = () => {
  const ADDRESS = generateBackendURL("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const { Text, Title } = Typography;

  const {
    setUsername,
    setAccessToken,
    setRefreshToken,
  } = useLoginStore((state) => ({
    setUsername: state.setUsername,
    setAccessToken: state.setAccessToken,
    setRefreshToken: state.setRefreshToken,
  }));

  function handleUsernameChange(event) {
    setUsernameInput(event.target.value);
  }

  function handlePasswordChange(event) {
    setPasswordInput(event.target.value);
  }

  function onSubmit() {
    http
      .post(ADDRESS + ROUTES.login, {
        username: usernameInput,
        password: passwordInput,
      })
      .then((response) => {
        setUsername(response.data.username);
        setAccessToken(response.data.access);
        setRefreshToken(response.data.refresh);
        navigate("/register-emotion");
      })
      .catch((error) => {
        // let wrongPassword = document.getElementById("wrongPassword");
        // wrongPassword.classList.add("show");
        console.error(error);
      });
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="login">
      <Row className="login__header">
        <Col span={24}>
          <Title level={1}>Know your emotions</Title>
          <Text>keep track of your emotions when know when to get help</Text>
        </Col>
      </Row>
      <Form className="login__box" layout="vertical">
        <Title level={4}>Login</Title>
        <Row>
          <Col span={24}>
            <Form.Item label="username">
              <Input placeholder="type your username" onChange={handleUsernameChange}
                value={usernameInput}></Input>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="password">
              <Input placeholder="type your password" type="password" onChange={handlePasswordChange}
                value={passwordInput}
                onKeyDown={handleKeyPress}></Input>
            </Form.Item>
          </Col>
        </Row>
        <span className="login__box__button">
          <Button type="primary" shape="round" size="large" htmlType="submit" onClick={onSubmit}
          >
            sign in
          </Button>
        </span>
        <Row className="login__box__sign">
          <Col span={24}>
            <Button type="primary" shape="round" size="large">
              <GoogleOutlined />
              sign in with google
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
