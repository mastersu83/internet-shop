import React from "react";
import Header from "../Header/Header";
import classes from "../../App.module.scss";
import { Outlet } from "react-router-dom";
import RightBar from "../RightBar/RightBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.content}>
          <Header />
          <Outlet />
        </div>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
