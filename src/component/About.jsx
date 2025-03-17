const About = () => {
  return (
    <div className="absolute inset-0 flex flex-col lg:flex-row items-start justify-start bg-neutral-900 text-white p-8 rounded-3xl border-0.1 ">
      <div className="">
        <h2 className="text-3xl font-small text-yellow-400 mt-5 selection:bg-yellow-500 selection:text-black">
          About Me
        </h2>
        <div className="w-[50px] h-[1px] border-[1.5px] border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12"></div>
        <p className="mt-4 text-gray-300  selection:bg-yellow-500 selection:text-black">
          I’m Adithya Sharma, a Web & App Developer with a relentless drive for
          building high-impact, user-focused applications. My expertise in
          full-stack development allows me to craft seamless, efficient, and
          scalable solutions that push the boundaries of innovation.
        </p>

        <p className="mt-4 text-gray-300 selection:bg-yellow-500 selection:text-black">
          I thrive on solving complex problems, optimizing performance, and
          creating intuitive digital experiences that stand out. Whether it’s
          architecting robust backend systems, developing dynamic front-end
          interfaces, or integrating cutting-edge technologies, my focus is
          always on delivering excellence.
        </p>

        <h3 className="text-3xl font-small text-yellow-400 mt-6 selection:bg-yellow-500 selection:text-black">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 selection:bg-yellow-500 selection:text-black">
          {[
            {
              title: " Web & Mobile Development",
              desc: "Creating dynamic, user-friendly applications.",
            },
            {
              title: "Backend & APIs",
              desc: "Building secure and scalable server-side solutions.",
            },
            {
              title: "Data & Performance",
              desc: " Optimizing databases and system efficiency.",
            },
            {
              title: "Security & Authentication",
              desc: "Ensuring seamless and protected user access.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-neutral-800 p-4 rounded-xl">
              <h4 className="text-yellow-400 font-semibold">{service.title}</h4>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
