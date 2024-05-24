import { Navbar } from "../components/Navbar.tsx";
import { Footer } from "../components/Footer.tsx";
import { MainHeader } from "../components/Headers.tsx";
import { Card1 } from "../components/Card1.tsx";
import { involvementContent } from "../content/InvolvementContent.tsx";

const title = "Involvement";
const subtitle = "My activities, groups, and communities";
const content = involvementContent();
export const Involvement = () => {
  return (
    <>
      <Navbar />
      <MainHeader title={title} subtitle={subtitle} />
      {content.map((item, idx) => {
        return (
          <Card1
            key={idx}
            title={item.title}
            preview={item.preview}
            content={item.content}
            links={item.links}
          />
        );
      })}
      <Footer />
    </>
  );
};
