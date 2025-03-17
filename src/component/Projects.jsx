import React, { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Mobile Application", "Web Application"];
  
  // Project data with category information
  const projectsData = [
    {
      img: "./src/assets/WeatherForecast.png",
      title: "Weather Forecast",
      desc: "Mobile Application",
      category: "Mobile Application"
    },
    {
      img: "./src/assets/HealthCare.png",
      title: "HealthCare Management",
      desc: "Web Development",
      category: "Web Application"
    },
    {
      img: "./src/assets/BankingApplication.png",
      title: "Banking Application",
      desc: "Full Stack Development",
      category: "Web Application"
    },
    {
      img: "./src/assets/ToDoList.jpg",
      title: "ToDo List",
      desc: "Mobile Application",
      category: "Mobile Application"
    },
    {
      img: "./src/assets/TaskManager.png",
      title: "Task Manager",
      desc: "Productivity Tool",
      category: "Web Application"
    },
  ];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="absolute inset-0 flex flex-col lg:flex-row items-start justify-start bg-neutral-900 text-white p-8 rounded-3xl border-0.1 overflow-y-auto">
      {/* Project Heading */}
      <div className="w-full">
        <h2 className="text-3xl font-small text-yellow-400 mt-5 selection:bg-yellow-500 selection:text-black">
          Projects
        </h2>
        <div className="w-[50px] h-[1px] border-[1.5px] border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12"></div>

        {/* Category selection */}
        <section>
          <div className="flex mt-5">
            <ul className="flex flex-row gap-x-6">
              {categories.map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer transition-all duration-300 px-2 py-1 rounded-md 
                    ${
                      selectedCategory === item
                        ? "text-yellow-300 font-small"
                        : "text-white"
                    } hover:text-yellow-300 selection:bg-yellow-300 selection:text-black`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Project Grid - Now using filtered projects */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pr-4 mt-6 max-h-[500px] overflow-y-auto scrollbar-hidden">
          {filteredProjects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image */}
              <div className="border border-neutral-700 rounded-xl overflow-hidden">
                <img
                  className="w-full h-auto rounded-xl object-cover"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              {/* Text Content */}
              <div className="flex flex-col p-2 text-center">
                <h1 className="text-l font-small text-white">
                  {project.title}
                </h1>
                <p className="text-normal font-small text-gray-400">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;