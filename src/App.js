import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import PageLoader from "./PageLoader";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectDetail from "./ProjectDetail";
import Alerts from "./alerts/Alerts";
import AboutMe from "./AboutMe/AboutMe";
import MyActivity from "./MyActivity";
import ScrollToTop from "./ScrollToTop";
import { routeTitles } from "./routeTitles";
import { logPageViewAnalytics } from "./utils/analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = routeTitles[location.pathname] || "Home"; // Default to "Home"

    // Handle dynamic route like /project/:id
    if (location.pathname.startsWith("/project/")) {
      pageTitle = routeTitles["/project/:id"];
    }

    // Log Firebase analytics event
    logPageViewAnalytics(pageTitle, location);
  }, [location]);

  return (
    <div className='App'>
      <ScrollToTop />
      <Alerts />
      <PageLoader />
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={
            <motion.div className='container'>
              <Home />
              <MyActivity />
              <Projects />
            </motion.div>
          }
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
