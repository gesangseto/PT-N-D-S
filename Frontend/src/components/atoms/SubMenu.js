/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import isObject from "../../helper/utils";
import { Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SubMenu(props) {
  const { menu } = props;
  const [childMenu, setChildMenu] = useState([]);
  const [parentMenu, setParentMenu] = useState({});
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    if (isObject(menu)) {
      let newMenu = menu;
      newMenu.active = false;
      if (menu && menu.child) {
        setChildMenu([...menu.child]);
      }
      if (location.pathname.includes(menu.url)) {
        newMenu.active = true;
      }
      setParentMenu({ ...newMenu });
    }
  }, [props, location]);

  return (
    <>
      {childMenu.length === 0 ? (
        <Nav.Item>
          <Nav.Link active={parentMenu.active}>
            <Link
              to={parentMenu.url ?? "/dashboard"}
              style={{
                color: parentMenu.active ? "white" : "black",
                textDecoration: "none",
              }}
            >
              {parentMenu.name}
            </Link>
          </Nav.Link>
        </Nav.Item>
      ) : (
        <NavDropdown
          title={parentMenu.name}
          id="nav-dropdown"
          active={parentMenu.active}
        >
          {childMenu.map((item, index) => {
            let active = location.pathname.includes(item.url);
            return (
              <NavDropdown.Item eventKey="4.1" key={index} active={active}>
                <Link
                  to={item.url ?? "/dashboard"}
                  style={{
                    color: active ? "white" : "black",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Link>
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      )}
    </>
  );
}
