import "./output.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Involvement } from "./pages/Involvement.tsx";
import { Mentorship } from "./pages/Mentorship.tsx";
import { Contact } from "./pages/Contact.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/involvement" element={<Involvement />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/contact" element={<Contact />} />

        {/*<Route path="/projects" element={<Projects />} />*/}
      </Routes>
    </>
  );
}

export default App;
