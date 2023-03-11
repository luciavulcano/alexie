import React from "react";
import { Row, Col, Typography } from 'antd';
import noUser from "../../assets/imgs/user.png";


const UserInfos = () => {
  const { Text } = Typography;

  return (
    <Row className="user">
      <Col span={4} className="user__col">
        <img
          src={noUser}
          alt="image of the user"
          className="user__image"
        />
      </Col>
      <Col span={20}>
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

