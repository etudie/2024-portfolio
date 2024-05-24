import xue1 from "../../assets/about/xue1.jpeg";

const aboutImages = [xue1];
export const AboutPanel = () => {
  return (
    <>
      <div id="about" className="pt-20 "></div>
      <div className="flex h-screen flex-col items-center justify-center p-4 pt-0 text-white sm:flex-row">
        <div className="flex justify-end sm:w-1/2">
          <Gallery />
        </div>
        <div className="sm:w-1/2">
          <h3 className="pl-2 uppercase text-white">03 — About</h3>
          <Text />
        </div>
      </div>
    </>
  );
};

const Gallery = () => {
  return (
    <div className="flex flex-row">
      {aboutImages.map((img, idx) => (
        <div>
          <img src={img} key={idx} alt="about" width="350px" />
        </div>
      ))}
    </div>
  );
};

const Text = () => {
  return (
    <div className="pl-4 sm:w-1/2">
      <h1 className="text-5xl">Hello, hello 👋</h1>
      <p className="pt-3">
        My name is Xue (
        <a
          href="https://www.youtube.com/watch?v=xJWnB6m5qAI"
          className="underline"
        >
          pronounced 'shway'
        </a>
        ) and this is where I feature my latest and greatest!
      </p>
      <p className="pt-3">
        A self-taught software engineer from an electrical engineering
        background, I'm multi-faceted and multi-talented.
      </p>
      <p className="pt-3">
        If you're adventurous, you can check out my communities and how I
        volunteer with students and early career professionals.
      </p>
      <p className="pt-3">
        Feel free to{" "}
        <a href="/#contact" className="underline">
          send me a note
        </a>{" "}
        to request my resume or just to chat!
      </p>
    </div>
  );
};
