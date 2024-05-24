import { ProjectCard } from "../ProjectCard.tsx";
import teslaCharge from "../../assets/projectPreview/tesla-charge.png";
import teslaChoose from "../../assets/projectPreview/tesla-choose.png";
import teslaDrive from "../../assets/projectPreview/tesla-demoDrive.png";
import teslaTrips from "../../assets/projectPreview/tesla-findus.png";
import { MainDivider } from "../Dividers.tsx";

const previews = [
  {
    preview: teslaChoose,
    title: "Help Me Choose",
    url: "",
    company: "Tesla",
    description: "An application to help users choose a Tesla model",
  },
  {
    preview: teslaCharge,
    title: "Help Me Charge",
    url: "",
    company: "Tesla",
    description: "An interactive quiz to help users explore charging options",
  },
  {
    preview: teslaDrive,
    title: "Demo Drive",
    url: "",
    company: "Tesla",
    description: "A page to schedule test drives",
  },
  {
    preview: teslaTrips,
    title: "Trips",
    url: "",
    company: "Tesla",
    description: "An app to help drivers plan their trips",
  },
];
export const ProjectsPanel = () => {
  return (
    <>
      <div id="featured" className="pt-20 "></div>
      <h3 className="text-center uppercase text-white">02 — Projects</h3>
      <MainDivider content="Featured Projects" />
      <div className="flex items-center justify-center">
        <Gallery />
      </div>
    </>
  );
};

const Gallery = () => {
  return (
    <div className="sm:w-1/2">
      {previews.map((preview, idx) => {
        return (
          <div>
            <ProjectCard
              cover={preview.preview}
              company={preview.company}
              title={preview.title}
              description={preview.description}
              key={idx}
            />
          </div>
        );
      })}
    </div>
  );
};
