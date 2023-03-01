import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Input, Typography, Form, Checkbox, Button, message } from "antd";
import { maxLength, requiredField } from "../services/constants";
import { sendPost, ROUTES } from "../services/backendRoutes";
import UserInfos from "../components/shared/user";

const RegisterEmotions = () => {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const saveEmotions = useCallback(async (values) => {
    const requestMainEmotion = {
      description: values.mainEmotion
    };
    const requestEmotions = {
      description: values.generalEmotion !== undefined ? values.generalEmotion.join(",") : null
    };
    const requestHabits = {
      description: values.habits !== undefined ? values.habits.join(",") : null
    };
    const requestEvents = {
      description: values.events !== undefined ? values.events.join(",") : null
    };
    const requestHealth = {
      description: values.health !== undefined ? values.health.join(",") : null
    };
    sendPost(`${ROUTES.mainEmotion}`, requestMainEmotion)
      .then(() => {
        sendPost(`${ROUTES.emotions}`, requestEmotions)
          .then(() => {
            sendPost(`${ROUTES.habits}`, requestHabits)
              .then(() => {
                sendPost(`${ROUTES.events}`, requestEvents)
                  .then(() => {
                    sendPost(`${ROUTES.health}`, requestHealth)
                    navigate('/my-emotions')
                  })
                  .catch((error) => {
                    message.error(`Im sorry, that was an internal issue. We did not save your emotions`);
                    console.error(error)
                  })
              })
              .catch((error) => {
                message.error(`Im sorry, that was an internal issue. We did not save your emotions`);
                console.error(error)
              })
          })
          .catch((error) => {
            message.error(`Im sorry, that was an internal issue. We did not save your emotions`);
            console.error(error)
          })
      }).catch((error) => {
        message.error(`Im sorry, that was an internal issue. We did not save your emotions`);
        console.error(error)
      });
  });


  return (
    <Form
      className="register-emotions"
      onFinish={saveEmotions}
      layout="vertical"
      form={form}
    >
      <span className="register-emotions__desktop">
        <UserInfos/>
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
          <Form.Item
            name="generalEmotion"
            shouldUpdate
          >
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
          </Form.Item>
        </Row>
        <Row className="register-emotions__habits">
          <Col span={24}>
            <Title level={4}>habits</Title>
          </Col>
          <Form.Item
            name="habits"
            shouldUpdate
          >
            <Checkbox.Group className="register-emotions__habits__checkbox" >
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
          </Form.Item>
        </Row>
      </span>

      <span className="register-emotions__desktop--start">
        <Row className="register-emotions__events">
          <Col span={24}>
            <Title level={4}>events</Title>
          </Col>
          <Form.Item
            name="events"
            shouldUpdate
          >
            <Checkbox.Group className="register-emotions__events__checkbox" >
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
          </Form.Item>
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
          <Form.Item
            name="health"
            shouldUpdate
          >
            <Checkbox.Group className="register-emotions__health__checkbox" name="health">
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
          </Form.Item>
        </Row>
      </span>
      <Row className="register-emotions__button">
        <Form.Item shouldUpdate>
          <Button type="primary" shape="round" size="large" htmlType="submit">
            save
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default RegisterEmotions;
