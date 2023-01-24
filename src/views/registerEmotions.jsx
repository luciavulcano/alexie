import { React } from "react";
import { Col, Row, Input, Space, Typography, Form, Checkbox } from "antd";
import noUser from "../assets/imgs/user.png";

const RegisterEmotions = () => {
  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  return (
    <Form className="register-emotions" layout="vertical" form={form}>
      <span>
        <Row className="register-emotions__user">
          <Col span={12}>
            <img
              src={noUser}
              alt=""
              srcset=""
              className="register-emotions__user__image"
            />
          </Col>
          <Col span={12}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores a error facere eveniet earum maxime dolorem totam
              reiciendis.
            </Text>
          </Col>
        </Row>
        <Space />
        <Row className="register-emotions__input">
          <Title level={4}>emotions</Title>
          <Col span={24}>
            <Form.Item
              shouldUpdate
              name="mainEmotion"
              label="today I felt most"
              rules={[]}
            >
              <Input type="string" placeholder="type something"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Checkbox.Group className="register-emotions__checkbox">
          <Row>
            <Col span={6}>
              <Checkbox value="anger">anger</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="happy">happy</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="fear">fear</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="boredom">boredom</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="confusion">confusion</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="lonely">lonely</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="pain">pain</Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="tired">tired</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </span>

      <span></span>
    </Form>
  );
};

export default RegisterEmotions;
