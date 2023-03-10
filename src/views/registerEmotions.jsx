import { React, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Input, Typography, Form, Checkbox, Button, message } from "antd";
import { maxLength, requiredField } from "../services/constants";
import { sendPost, ROUTES, sendGet } from "../services/backendRoutes";
import UserInfos from "../components/shared/user";

const RegisterEmotions = () => {
  const [emotionsCheckbox, setEmotionsCheckbox] = useState([]);
  const [checkedEmotions, setCheckedEmotions] = useState([]);
  const [habitsCheckbox, setHabitsCheckbox] = useState([]);
  const [checkedHabits, setCheckedHabits] = useState([]);
  const [eventsCheckbox, setEventsCheckbox] = useState([]);
  const [checkedEvents, setCheckedEvents] = useState([]);
  const [healthCheckbox, setHealthCheckbox] = useState([]);
  const [checkedHealth, setCheckedHealth] = useState([]);
  const { Title } = Typography;
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const loopIds = (idArray, route, param) => {
    return idArray.forEach(id => {
      sendPost(`${route}`, { [param]: id } )
    });
  };

  //saves the user information
  const saveEmotions = useCallback(async (values) => {
    const requestMainEmotion = {
      description: values.mainEmotion
    };
    const requestMainHealth = {
      description: values.mainHealth
    };
    sendPost(`${ROUTES.mainEmotion}`, requestMainEmotion);
    sendPost(`${ROUTES.mainHealth}`, requestMainHealth);
    loopIds(checkedEmotions, ROUTES.emotionsLog, "emotion");
    loopIds(checkedHabits, ROUTES.habitsLog, "habit");
    loopIds(checkedEvents, ROUTES.eventsLog, "event");
    loopIds(checkedHealth, ROUTES.healthLog, "health");
    navigate('/my-emotions');
  });

  //renders the data from db
  const renderInformation = () => {
    sendGet(`${ROUTES.emotions}`).then((response) => {
      setEmotionsCheckbox(response.data)
    })
    sendGet(`${ROUTES.habits}`).then((response) => {
      setHabitsCheckbox(response.data)
    })
    sendGet(`${ROUTES.health}`).then((response) => {
      setHealthCheckbox(response.data)
    })
    sendGet(`${ROUTES.events}`).then((response) => {
      setEventsCheckbox(response.data)
    })
  };

  //watches and saves the checked itens on an array
  const handleCheckedEmotions = (checkedValues) => {
    setCheckedEmotions(checkedValues)
  };
  const handleCheckedHabits = (checkedValues) => {
    setCheckedHabits(checkedValues)
  };
  const handleCheckedEvents = (checkedValues) => {
    setCheckedEvents(checkedValues)
  };
  const handleCheckedHealth = (checkedValues) => {
    setCheckedHealth(checkedValues)
  };


  useEffect(() => {
    renderInformation()
  }, []);

  return (
    <Form
      className="register-emotions"
      onFinish={saveEmotions}
      layout="vertical"
      form={form}
    >
      <span className="register-emotions__desktop">
        <UserInfos />
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
            <Checkbox.Group
              className="register-emotions__emotions__checkbox"
              onChange={handleCheckedEmotions}
            >
              <Row>
                {emotionsCheckbox.map((emotion, i) => {
                  return (
                    <Col span={8} key={i}>
                      <Checkbox value={emotion.id}>{emotion.description}</Checkbox>
                    </Col>
                  )
                })}
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
            <Checkbox.Group
              className="register-emotions__habits__checkbox"
              onChange={handleCheckedHabits}
            >
              <Row>
                {habitsCheckbox.map((habit, i) => {
                  return (
                    <Col span={8} key={i}>
                      <Checkbox value={habit.id}>{habit.description}</Checkbox>
                    </Col>
                  )
                })}
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
            <Checkbox.Group
              className="register-emotions__events__checkbox"
              onChange={handleCheckedEvents}
            >
              <Row>
                {eventsCheckbox.map((event, i) => {
                  return (
                    <Col span={24} key={i}>
                      <Checkbox value={event.id}>{event.description}</Checkbox>
                    </Col>
                  )
                })}
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
                <Input type="text" placeholder="type something"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="health"
            shouldUpdate
          >
            <Checkbox.Group
              className="register-emotions__health__checkbox"
              onChange={handleCheckedHealth}
            >
              <Row>
                {healthCheckbox.map((health, i) => {
                  return (
                    <Col span={8} key={i}>
                      <Checkbox value={health.id}>{health.description}</Checkbox>
                    </Col>
                  )
                })}
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
