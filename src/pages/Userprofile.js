import React from "react";
import Navbar from "../component/Navbar-all";
import Sidebar from "../component/Sidebar-jami";
import Footer from "../component/footer";
import Profile from "../component/Profilescreen";
import "./Userprofile.css";
const Userprofile = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="profilecontainer">
          <Profile />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
