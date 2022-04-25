import React from "react";
import PropTypes from "prop-types";

import FloatingWidget from "./FloatingWidget";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <Nav />
      <main className={className}>
        {children}
        <FloatingWidget item="Discord" />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
