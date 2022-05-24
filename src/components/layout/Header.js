import { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navigation } from "../../routes";
import SubMenu from "../atoms/SubMenu";
export default function Header() {
  const handleSelect = () => {};
  return (
    <Nav
      variant="pills"
      activeKey="1"
      onSelect={handleSelect}
      style={{
        backgroundColor: "#ebe8e8",
        height: 80,
        alignContent: "center",
        paddingInline: 10,
      }}
    >
      {navigation.map((item, index) => (
        <SubMenu key={index} menu={item} />
      ))}
    </Nav>
  );
}
