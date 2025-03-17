import { useState } from "react";
import {
  Instagram,
  GithubIcon,
  LinkedinIcon,
  MailCheck,
  PhoneCallIcon,
  Cake,
  MapPinCheckIcon,
  Contact,
} from "lucide-react";
import Navbar from "./component/navbar";
import About from "./component/About";
import Resume from "./component/Resume";
import Projects from "./component/Projects";
import Contacts from "./component/Contacts";
import avatar from "./assets/avatar.png";

const App = () => {
  const [active, setActive] = useState("about"); // Manage Active Section

  return (
    <div className="relative min-h-screen flex justify-center items-center p-4">
      <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="flex space-x-4">
        {/* Left Info Box */}
        <div className="bg-[#1e1e1e] border border-neutral-700 flex flex-col items-center justify-start w-[25rem] h-[50rem] rounded-3xl relative p-5 selection:bg-yellow-500 selection:text-black">
          {/* Profile Image */}
          <div className="w-[200px] h-[200px] bg-[#2d2d2d] rounded-2xl mt-5 flex flex-col justify-center items-center">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Name & Role */}
          <div className="flex items-center justify-center flex-col mt-4">
            <h1 className="text-white text-3xl"> Adithya Sharma</h1>
            <p className="mt-3 text-white px-3 py-1 rounded-lg shadow-[inset_0_0_5px_rgba(255,255,255,0.2)]">
              Software Developer
            </p>
          </div>

          {/* Divider */}
          <div className="w-[160px] h-[10px] border-b-[1px] border-yellow-400 mt-3 md:mt-4 mb-12"></div>

          {/* Contact Cards */}
          <div className="w-80 h-20 flex flex-row items-center mb-6 cursor-pointer border-0.1 p-2 rounded-2xl">
            <MailCheck
              size="34"
              strokeWidth="1"
              className="text-white flex-shrink-0"
            />
            <div className="mx-10 flex-1 overflow-hidden">
              <p className="text-sm font-extralight text-gray-500">EMAIL</p>
              <p
                className="text-sm font-extralight text-white truncate w-[180px]"
                title="companyas2025@gmail.com"
              >
                companyas2025@gmail.com
              </p>
            </div>
          </div>

          {/* More Cards */}
          <div className="w-80 h-20 flex flex-row items-center mb-6 cursor-pointer border-0.1 p-2 rounded-2xl">
            <PhoneCallIcon
              size="34"
              strokeWidth="1"
              className="text-white flex-shrink-0"
            />
            <div className="mx-10 flex-1 overflow-hidden">
              <p className="text-sm font-extralight text-gray-500">PHONE NO</p>
              <p
                className="text-sm font-extralight text-white truncate w-[180px]"
                title="+91 9390030344"
              >
                +91 9390030344
              </p>
            </div>
          </div>

          {/* Birthday */}
          <div className="w-80 h-20 flex flex-row items-center mb-6 cursor-pointer border-0.1 p-2 rounded-2xl">
            <Cake
              size="34"
              strokeWidth="1"
              className="text-white flex-shrink-0"
            />
            <div className="mx-10 flex-1 overflow-hidden">
              <p className="text-sm font-extralight text-gray-500">BIRTHDAY</p>
              <p
                className="text-sm font-extralight text-white truncate w-[180px]"
                title="18th-June-2004"
              >
                18th-June-2004
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="w-80 h-20 flex flex-row items-center mb-6 cursor-pointer border-0.1 p-2 rounded-2xl">
            <MapPinCheckIcon
              size="34"
              strokeWidth="1"
              className="text-white flex-shrink-0"
            />
            <div className="mx-10 flex-1 overflow-hidden">
              <p className="text-sm font-extralight text-gray-500">ADDRESS</p>
              <p
                className="text-sm font-extralight text-white truncate w-[180px]"
                title="Hyderabad, Telangana, India"
              >
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-row m-3 space-x-4">
            <a
              href="https://github.com/Adithya0604"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon
                size="24"
                className="cursor-pointer text-white hover:text-amber-400 transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/adithya-sharma-6b69b9223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon
                size="24"
                className="cursor-pointer text-white hover:text-amber-400 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative flex border border-neutral-700 flex-col items-center justify-start min-w-[45rem] min-h-[50rem] rounded-3xl p-5 overflow-hidden">
          {/* Navbar */}
          <Navbar active={active} setActive={setActive} />

          {/* Dynamic Content - Overlapping Sections */}
          <div className="absolute inset-0">
            {active === "about" && <About />}
            {active === "resume" && <Resume />}
            {active === "projects" && <Projects />}
            {active === "contact" && <Contacts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
