import { React, useCallback, useEffect } from "react";
import { Col, Row, Input, Typography, Form, Checkbox, Button } from "antd";
import noUser from "../assets/imgs/user.png";
import { maxLength, requiredField } from "../services/constants";
import { sendGet, sendPost, ROUTES } from "../services/backendRoutes";

const RegisterEmotions = () => {
  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  const sendSave = () => {
    console.log("save");
  };

  //renderiza as informações do backend
  const renderEmotions = useCallback(async () => {
    try {
      const response = await sendGet(`${ROUTES.emotions}`);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    renderEmotions()
  }, [])
  

  return (
    <Form
      className="register-emotions"
      layout="vertical"
      form={form}
      onFinish={sendSave}
    >
      <span className="register-emotions__desktop">
        <Row className="register-emotions__user">
          <Col span={24} className="register-emotions__user__col">
            <img
              src={noUser}
              alt="image of the user"
              className="register-emotions__user__image"
            />
          </Col>
          <Col span={24}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores a error facere eveniet earum maxime dolorem totam
              reiciendis.
            </Text>
          </Col>
        </Row>
        <Row className="register-emotions__emotions">
          <Col span={24}>
            <Title level={4}>emotions</Title>
          </Col>
          <Col span={24}>
            <Form.Item
              shouldUpdate
              name="mainEmotion"
              label="today I felt most"
              rules={[
                {
                  required: true,
                  message: requiredField,
                },
                {
                  max: 50,
                  message: maxLength,
                },
              ]}
            >
              <Input
                type="string"
                placeholder="type something"
                className="register-emotions__emotions__input"
              ></Input>
            </Form.Item>
          </Col>
          <Checkbox.Group className="register-emotions__emotions__checkbox">
            <Row>
              <Col span={8}>
                <Checkbox value="anger">anger</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="happiness">happiness</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="fear">fear</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="boredom">boredom</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="confusion">confusion</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="lonely">lonely</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="pain">pain</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="tired">tired</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Row>
        <Row className="register-emotions__habits">
          <Col span={24}>
            <Title level={4}>habits</Title>
          </Col>
          <Checkbox.Group className="register-emotions__habits__checkbox">
            <Row>
              <Col span={8}>
                <Checkbox value="exercised">exercised</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="showered">showered</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="socialized">socialized</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="slept">slept</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="ate healthy">ate healthy</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="hobbie">hobbie</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="drank water">drank water</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Row>
      </span>

      <span className="register-emotions__desktop--start">
        <Row className="register-emotions__events">
          <Col span={24}>
            <Title level={4}>events</Title>
          </Col>
          <Checkbox.Group className="register-emotions__events__checkbox">
            <Row>
              <Col span={24}>
                <Checkbox value="meltdown">did I had a meltdown?</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="identified">
                  was I able to identify something that was bottering me?
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Row>
        <Row className="register-emotions__health">
          <Col span={24}>
            <Title level={4}>health</Title>
          </Col>
          <Row>
            <Col span={24}>
              <Form.Item
                shouldUpdate
                name="mainHealth"
                label="did I had a health issue today?"
              >
                <Input type="text" placeholder="type something"></Input>
              </Form.Item>
            </Col>
          </Row>

          <Checkbox.Group className="register-emotions__health__checkbox">
            <Row>
              <Col span={8}>
                <Checkbox value="headache">headache</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="burnout">burnout</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="repetitive thoughts">repetitive thoughts</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="cramps">cramps</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="feeling sick">feeling sick</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="back pain">back pain</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Row>
      </span>
      <Row className="register-emotions__button">
        <Button type="primary" shape="round" size="large" htmlType="submit">
          save
        </Button>
      </Row>
    </Form>
  );
};

export default RegisterEmotions;
