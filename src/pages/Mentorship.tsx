import { Navbar } from "../components/Navbar.tsx";
import { Footer } from "../components/Footer.tsx";
import { MainHeader } from "../components/Headers.tsx";
import { col1, col2, col3 } from "../content/MentorshipContent.tsx";

const title = "Mentorship";
const subtitle = "How can I help you ?";
const content1 = col1();
const content2 = col2();
const content3 = col3();
export const Mentorship = () => {
  return (
    <>
      <Navbar />
      <MainHeader title={title} subtitle={subtitle} />
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="flex w-4/5 flex-col md:flex-row">
          <div className="md:w-1/3">{content1}</div>
          <div className="md:w-1/3">{content2}</div>
          <div className="md:w-1/3">{content3}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
