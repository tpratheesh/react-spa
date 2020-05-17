import React, { useContext } from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faAddressBook,
  faInfo
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/sidebar.css";
import { MenuContext } from "../App";

export default () => {
  const menuContext = useContext(MenuContext);
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={menuContext.isMenuOpen}
      onStateChange={state => menuContext.stateChangeHandler(state)}
    >
      <header>
        <a onClick={menuContext.toggleMenu} href="#/">
          <h2 className="bm-item">
            <FontAwesomeIcon icon={faAnchor} />
            <span>react-spa</span>
          </h2>
        </a>
      </header>
      <a className="menu-item" onClick={menuContext.toggleMenu} href="#/about">
        <FontAwesomeIcon icon={faInfo} />
        <span onClick={() => menuContext.toggleMenu(false)}>About</span>
      </a>
      <a
        className="menu-item"
        onClick={menuContext.toggleMenu}
        href="#/contact"
      >
        <FontAwesomeIcon icon={faAddressBook} />
        <span>Contact</span>
      </a>
      <div className="menu-item footer">
        <span>v1.0</span>
      </div>
    </Menu>
  );
};
