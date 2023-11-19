import React from "react";
import MainScreen from "./pages/Mainscreen";
import "./App.css";
import About from "./pages/About";
import ResponsibleGambling from "./pages/ResponsibleGambling";
import Termsandcondition from "./pages/Termsandcondition";
// import Rightsmallbanner from "./component/Rightsmallbanner";
import Navbarall from "./component/Navbar-all";
import KYC from "./pages/KYC";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sports from "./pages/Sports";
import Userprofile from "./pages/Userprofile";
import SideNavbar from "./component/Sidebar-jami";
// import Rightlongbanner from "./component/Rightlongbanner";
import RightSidebar from "./component/RightSidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />

        <Route
          path="/*"
          element={
            <>
              <Navbarall />
              <div className="container">
                <SideNavbar />

                <Routes>
                  <Route
                    path="/ResponsibleGambling"
                    element={<ResponsibleGambling />}
                  />
                  <Route path="/KYC" element={<KYC />} />
                  <Route
                    path="/Termsandconditions"
                    element={<Termsandcondition />}
                  />
                  <Route path="/About" element={<About />} />
                  <Route path="/Sports" element={<Sports />} />
                </Routes>

                <RightSidebar />
              </div>
            </>
          }
        />
        <Route path="/Userprofile" element={<Userprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
