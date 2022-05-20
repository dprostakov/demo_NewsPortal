import React from "react";
import {NavLink} from "react-router-dom";

import {routeMain as routeMainPage} from "pages/MainPage";
import {routeMain as routeNewsListPage} from "pages/NewsListPage";
import {routeMain as routeContacts} from "pages/Contacts";

import "./styles.scss";

const Header = () => {
  return (
    <header className="mainHeader">
        <div className="title">News Portal</div>
        <nav>
          <NavLink to = {routeMainPage()} activeClassName = {'linkActive'}>
            Main
          </NavLink>
          <NavLink to = {routeNewsListPage()} activeClassName = {'linkActive'}>
            News
          </NavLink>
          <NavLink to = {routeContacts()} activeClassName = {'linkActive'}>
            Contacts
          </NavLink>
        </nav>
    </header>
  );
}

export default Header;