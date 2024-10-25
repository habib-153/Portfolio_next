import React from "react";

import PortfolioBanner from "@/src/components/modules/home/Banner";
import ContactSection from "@/src/components/modules/contact/Contact";
import EducationSection from "@/src/components/modules/home/Education";
import Skills from "@/src/components/modules/home/Skills";
import ProjectOnHome from "@/src/components/modules/home/ProjectOnHome";

const Home = () => {
  return (
    <div>
      <PortfolioBanner />
      <Skills />
      <ProjectOnHome />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Home;
