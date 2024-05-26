import React from "react";

interface HeroProps {
  title: string | React.ReactNode;
}
export const MainPanel = () => {
  return (
    <>
      <Hero
        title={
          <>
            A dynamic <i className="font-serif">Software Engineer</i> that
            brings <i className="font-serif">UX</i> visions to life
          </>
        }
      />
    </>
  );
};

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center text-slate-100">
      <div className="hero-gradient w-full md:w-[390px]"></div>
      <h2 className="max-w-5xl p-6 pt-8 text-7xl">{title}</h2>
    </div>
  );
};
