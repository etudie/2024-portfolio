import contactImg from "../assets/contact/contact.jpeg";
import { Navbar } from "../components/Navbar.tsx";
import { MainHeader } from "../components/Headers.tsx";
import { Footer } from "../components/Footer.tsx";
const title = "Contact";
const subtitle = "Drop a note and connect";
export const Contact = () => {
  return (
    <>
      <Navbar />
      <MainHeader title={title} subtitle={subtitle} />
      <div className="flex h-screen flex-col items-center justify-center p-4 pt-0 text-white">
        <img src={contactImg} alt="contact" width="350px" />
        Please drop me a note on LinkedIn{" "}
        <a href="https://linkedin.com/in/xuengineer">here</a>
      </div>
      <Footer />
    </>
  );
};
