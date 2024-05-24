export const Footer = () => {
  return (
    <div className="flex flex-col justify-center py-10 text-white sm:flex-row">
      <div className="flex flex-col text-center sm:w-1/2 sm:flex-row sm:text-left">
        <div className="flex flex-grow flex-col px-3 ">
          <h1 className="text-2xl">Xue Hua</h1>
          <p>Xue is currently a software engineer at Microsoft.</p>
        </div>
        <div className="px-3">
          <h1 className="text-2xl">Reach Me</h1>
          <p>
            <a href="/">LinkedIn</a>
          </p>
        </div>
        <div className="px-3">
          <h1 className="text-2xl">Learn More</h1>
          <p>All projects</p>
          <p>Mentorship</p>
          <p>Involvement</p>
        </div>
        <div className="px-3">
          <h1 className="text-2xl">Credits</h1>
          <p>React</p>
        </div>
      </div>
    </div>
  );
};
