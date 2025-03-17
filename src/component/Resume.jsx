import React from "react";

const Resume = () => {
  return (
    <div className="absolute inset-0 flex flex-col bg-neutral-900 text-white p-8 rounded-3xl border-0.1">
      {/* Resume Heading */}
      <h2 className="text-3xl font-small text-yellow-400 mt-5 selection:bg-yellow-500 selection:text-black">Resume</h2>
      <div className="w-[50px] h-[1px] border-[1.5px] border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12"></div>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-scroll pr-4 scrollbar-hidden selection:bg-yellow-500 selection:text-black ">
        <TimelineSection title="Education" events={educationData} />
        <TimelineSection title="Experience" events={expreicenceData} />
        {/* <TimelineSection title="Course Completions" events={certificateData} /> */}

        <h1 className="font-semibold text-yellow-300 text-2xl selection:bg-yellow-500 selection:text-black">My Skills</h1>
        <div className="w-50 h-100 border-y-2 border-neutral-700 mt-6  rounded-2xl p-5">
          <h1 className="text-white font-bold">Web Development <span className="text-gray-400 font-normal p-2">  80%</span></h1>
          <div className="w-full h-[10px] bg-gray-500 border-0.1 border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12 relative">
            <div
              className="h-full bg-yellow-400 rounded-2xl"
              style={{ width: "80%" }}
            ></div>
          </div>
          <h1 className="text-white font-bold">Mobile Development <span className="text-gray-400 font-normal p-2"> 90%</span></h1>
          <div className="w-full h-[10px] bg-gray-500 border-0.1 border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12 relative">
            <div
              className="h-full bg-yellow-400 rounded-2xl"
              style={{ width: "90%" }}
            ></div>
          </div>
          <h1 className="text-white font-bold">Version (Git)<span className="text-gray-400 font-normal p-2"> 50%</span></h1>
          <div className="w-full h-[10px] bg-gray-500 border-0.1 border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12 relative">
            <div
              className="h-full bg-yellow-400 rounded-2xl"
              style={{ width: "50%" }}
            ></div>
          </div>
          <h1 className="text-white font-bold">DataBase Management<span className="text-gray-400 font-normal p-2"> 90%</span></h1>
          <div className="w-full h-[10px] bg-gray-500 border-0.1 border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12 relative">
            <div
              className="h-full bg-yellow-400 rounded-2xl"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Timeline Section Component (Heading + Timeline)
const TimelineSection = ({ title, events }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-yellow-300 mb-4">{title}</h3>
      <Timeline events={events} />
    </div>
  );
};

// Timeline Component (All items aligned to the right)
const Timeline = ({ events }) => {
  return (
    <div className="relative flex flex-col gap-y-6 w-full">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative grid grid-cols-[auto_1fr] gap-x-4 items-start"
        >
          <Circle />
          <EventCard
            heading={event.heading}
            subheading={event.subheading}
            description={event.description}
          />
        </div>
      ))}
    </div>
  );
};

// Timeline Elements
const Circle = () => (
  <div className="rounded-full w-2 h-2 bg-yellow-500 mt-3.5 "></div>
);

// Event Card
const EventCard = ({ heading, subheading, description }) => {
  return (
    <div className="flex flex-col gap-y-1 shadow-md rounded-xl p-2  text-white">
      <div className="text-white font-bold text-sm">{heading}</div>
      <div className=" text-yellow-300 text-sm">{subheading}</div>
      <div className="text-sm text-gray-300">{description}</div>
    </div>
  );
};

// Education Data
const educationData = [
  {
    heading: "Bachelor of Engineering in Computer Science and Engineering",
    subheading: "2021 — 2025",
    description:
      "Currently navigating the world of Data Structures, Algorithms, Web, and Mobile App Development at Chandigarh University turning caffeine into code and ideas into projects that actually work!",
  },
  {
    heading: "Senior Secondary Education",
    subheading: "2019 — 2021",
    description:
      "Mastered Math, Physics, and Chemistry with JEE Main (92.2%) but JEE Advanced had other plans (70 marks, oops!).",
  },
  {
    heading: "Secondary Education",
    subheading: "2018 — 2019",
    description:
      "Graduated from Vijay High School with flying colors mostly in the answer sheets.",
  },
];

const expreicenceData = [
  {
    heading: "Mobile/Frontend Developer",
    subheading: "December 2021 – February 2022",
    description:
      "Trained remotely at TeachNook as a Frontend/Mobile Developer. Built a Weather Casting app using React Native, Expo, TailwindCSS, and Postman (because trusting APIs blindly is risky!). Designed with a beautiful custom UI—because weather updates should look good too!",
  },
];

// const certificateData = [
//   {
//     heading: "Bachelor of Engineering in Computer Science and Engineering",
//     subheading: "2021 — Expected Graduation: 2025",
//     description:
//       "Studying at Chandigarh University, focusing on areas such as Data Structures, Algorithms, Web Development, and Mobile App Development. Active member of the Computer Science Society, working on projects that enhance user experience and functionality.",
//   },
//   {
//     heading: "Senior Secondary Education",
//     subheading: "2019 — 2021",
//     description: "Focused on PCM subjects, excelling in academics and nurturing a passion for technology.",
//   },
//   {
//     heading: "Secondary Education",
//     subheading: "2018 — 2019",
//     description: "Completed 10th grade at Ravindra Bharathi School, excelling in academics with a strong foundation in core subjects.",
//   },

// ];

export default Resume;
