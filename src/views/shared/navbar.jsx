import { React, useState } from "react";
import { Menu, Typography } from "antd";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png";

const Navbar = () => {
  function getItem(label, key) {
    return {
      label,
      key,
    };
  }

  const items = [
    {
      label: "my emotions",
      key: "emo",
    },
    getItem(<NavLink to="/register-emotion">new emotion</NavLink>, "newEmo"),
  ];
  const [current, setCurrent] = useState("emo");
  const { Title } = Typography;
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <nav className="navbar">
      <span>
        <img src={Logo} alt="" className="navbar__logo" />
        <Title level={2} className="navbar__h2">
          alexie
        </Title>
      </span>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="navbar__ul__desktop"
      />
      <div class="navbar__hamburguer">
        <input id="navbar__toggle" type="checkbox"/>
        <label class="navbar__hamburguer__btn" for="menu__toggle">
          <span></span>
        </label>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
          className="navbar__ul__mobile"
        />
      </div>
    </nav>
  );
};
export default Navbar;
