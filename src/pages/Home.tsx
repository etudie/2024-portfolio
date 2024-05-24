import { MainPanel } from "../components/home/MainPanel.tsx";
import { ServicesPanel } from "../components/home/ServicesPanel.tsx";
import { ProjectsPanel } from "../components/home/ProjectsPanel.tsx";
import { Footer } from "../components/Footer.tsx";
import { AboutPanel } from "../components/home/AboutPanel.tsx";
import { ContactPanel } from "../components/home/ContactPanel.tsx";
import { Navbar } from "../components/Navbar.tsx";
export const Home = () => {
  return (
    <>
      <Navbar />
      <MainPanel />
      <ServicesPanel />
      <ProjectsPanel />
      <AboutPanel />
      <ContactPanel />
      <Footer />
    </>
  );
};
