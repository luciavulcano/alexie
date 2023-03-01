import React from "react";
import { Row, Col, Typography } from 'antd';
import noUser from "../../assets/imgs/user.png";


const UserInfos = () => {
  const { Text } = Typography;

  return (
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
  )
}

export default UserInfos

