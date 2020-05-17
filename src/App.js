import React, { useState } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
import Contact from "./view/Contact";
import Navigation from "./components/Sidebar";
import Footer from "./components/Footer";
import "./assets/css/app.css";

export const MenuContext = React.createContext();

export default () => {
  const MyProvider = props => {
    const [menuOpenState, setMenuOpenState] = useState(false);

    return (
      <MenuContext.Provider
        value={{
          isMenuOpen: menuOpenState,
          toggleMenu: () => setMenuOpenState(!menuOpenState),
          stateChangeHandler: newState => setMenuOpenState(newState.isOpen)
        }}
      >
        {props.children}
      </MenuContext.Provider>
    );
  };

  return (
    <MyProvider>
      <HashRouter>
        <div id="outer-container">
          <Navigation />
          <main id="page-wrap">
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </main>
        </div>
      </HashRouter>
    </MyProvider>
  );
};
