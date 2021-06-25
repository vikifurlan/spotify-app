import React from "react";
import Sidebar from "./sidebar";
import "./index.css";
import Header from "./header";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="core_container">
        <Header />
        <div className="children_container">
        {children}
        </div>
        
      </div>
    </div>
  );
};
export default Layout;
