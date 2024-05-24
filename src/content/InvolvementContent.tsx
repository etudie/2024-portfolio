import mentorship from "../assets/involvement/mentoring.jpeg";
import bobatalksImg from "../assets/involvement/bobatalks.webp";
import mc2c from "../assets/involvement/mc2c.jpeg";
import hermanMiller from "../assets/involvement/HermanMiller.png";
import swe from "../assets/involvement/SWE.png";
import bridges from "../assets/involvement/Bridges.jpeg";
import gvsu from "../assets/involvement/GVSU.jpeg";
import habitica from "../assets/involvement/Habitica.png";
import discord from "../assets/involvement/Discord.jpeg";
export const involvementContent = () => {
  return [
    {
      title: "Mentorship and Volunteering",
      preview: mentorship,
      content: (
        <>
          I volunteer by offering mentorship to college and high-school students
          by helping them find their path as they navigate through their
          careers.
          <ul className="list-disc ">
            <li>Helped students apply and do research for scholarships</li>
            <li>Provided early career mentorship and guidance</li>
            <li>
              Supported students who are struggling with their transition from
              high-school to college or college to career
            </li>
          </ul>
        </>
      ),
      links: [
        {
          url: "/",
          title: "Learn More",
        },
      ],
    },
    {
      title: "BobaTalks",
      preview: bobatalksImg,
      content: (
        <>
          A non-profit with a vision to make mentorship accessible to both
          mentors and users
          <ul className="list-disc">
            <li>Served as Chief Tech Officer</li>
            <li>1-1 short term & long term mentorship sessions</li>
            <li>Participated in developing the core mentorship program</li>
            <li>Conducted career growth sessions for volunteers</li>
          </ul>
        </>
      ),
      links: [
        {
          url: "https://bobatalks.com/",
          title: "Website",
        },
      ],
    },
    {
      title: "Mastering College to Career",
      preview: mc2c,
      content: (
        <>
          A program aimed to help college students develop professionally in
          their fields, with a focus on minority and first-generation students.
          <ul className="list-disc ">
            <li>Conducted resume reviews</li>
            <li>Performed tech mock interviews</li>
            <li>Helped develop the Tech Program</li>
            <li>Participated in workshops and meetings</li>
          </ul>
        </>
      ),
      links: [
        {
          url: "https://www.opny.co/",
          title: "Website",
        },
        {
          url: "https://open.spotify.com/show/006SHPw5LYynW9gHesd0GQ",
          title: "Podcast",
        },
      ],
    },
    {
      title: "Racial Equity Team",
      preview: hermanMiller,
      content: (
        <>
          We are working to create an equitable environment with greater
          opportunities for the Asian community and other underrepresented
          groups.
          <ul className="list-disc ">
            <li>Wrote articles on The Lounge about Asian Issues</li>
            <li>Participated in meetings</li>
          </ul>
        </>
      ),
      links: [
        {
          url: "https://www.hermanmiller.com/better-world/inclusiveness-and-diversity/taking-action-toward-equity/",
          title: "Website",
        },
        {
          url: "https://open.spotify.com/show/49Bed76BOgqqjCpWAMaeiY",
          title: "Podcast",
        },
      ],
    },
    {
      title: "Society of Women Engineers (SWE)",
      preview: swe,
      content: (
        <>
          The Society of Women Engineers is the world’s largest advocate and
          catalyst for change for women in engineering and technology.
          <ul className="list-disc ">
            <li>Supported and uplifted women in the Engineering discipline</li>
          </ul>
        </>
      ),
      links: [
        {
          url: "https://swe.org/",
          title: "Website",
        },
      ],
    },
    {
      title: "Bridges Ministries",
      preview: bridges,
      content: (
        <>
          A Christian group focusing on helping international students
          transition to the US and providing support services like
          transportation, spiritual guidance, tutoring, etc.
          <ul className="list-disc ">
            <li>Organized STEM study sessions</li>
            <li>Participated in meetings</li>
            <li>Volunteered to help students transition to the US</li>
          </ul>
        </>
      ),
      links: [
        {
          url: "https://www.bridgesinternational.com/",
          title: "Website",
        },
      ],
    },
    {
      title: "GVSU Alumni",
      preview: gvsu,
      content: (
        <>
          Committed to connecting, engaging, and supporting Lakers throughout
          every stage of your life and career. LAKER FOR A LIFETIME!
          <ul className="list-disc ">
            <li>Participated in Alumni activities</li>
            <li>Volunteered for Career Services and Workshops</li>
            <li>Represent my company in recruitment of interns/co-ops</li>
          </ul>
        </>
      ),
      links: [
        {
          url: "https://www.gvsu.edu/alumni/new-grads-314.htm",
          title: "Website",
        },
      ],
    },
    {
      title: "Habitica - Atomic Habits",
      preview: habitica,
      content: (
        <>
          Atomic Habits was an online group that supported individuals and
          helped others overcome procrastination with mutual accountability.
          Based on the book by James Clear.
          <ul className="list-disc ">
            <li>
              Led a community of 130+ members in rehabilitative scenarios but
              mostly towards chronic procrastination using Atomic Habits
              ideology
            </li>
            <li>Contributed to coding integrity of the website</li>
            <li>Programmed a webapp</li>
          </ul>
        </>
      ),
      links: [],
    },
    {
      title: "Discord Communities",
      preview: discord,
      content: (
        <>
          Discord is online server-based chat platform. I participate in many
          tech communities that focus on career development.
          <ul className="list-disc ">
            <li>Conduct tech mock interviews</li>
            <li>Revise and review resumes</li>
          </ul>
        </>
      ),
      links: [],
    },
  ];
};
