import React from "react";

interface TextProps {
  content: string | React.ReactNode;
}

interface ServicesListProps {
  services: string[];
}
const textContent =
  "I bring solutions to make life easier for my customers and end users.";

const services: string[] = [
  "Custom Software Development",
  "Web Development",
  "API Development and Integration",
  "Database Design and Management",
  "Software Maintenance and Support",
  "User Experience (UX) Design",
];
export const ServicesPanel = () => {
  return (
    <>
      <div id="services" className="pt-20 "></div>
      <div className="flex h-screen flex-col items-center justify-center p-4 text-white sm:flex-row">
        <div className="flex justify-center sm:w-1/2 sm:justify-end">
          <Text content={textContent} />
        </div>
        <div className="sm:w-1/2">
          <ServicesList services={services} />
        </div>
      </div>
    </>
  );
};

const Text: React.FC<TextProps> = ({ content }) => {
  return (
    <div className="sm:w-1/2">
      <h3 className="uppercase">01 — Services</h3>
      <h2 className="text-4xl ">{content}</h2>
    </div>
  );
};

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
    <div className="sm:w-1/2">
      <ul>
        {services.map((service, idx) => {
          return (
            <li className=" border-b p-4 text-2xl" key={idx}>
              {service}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
