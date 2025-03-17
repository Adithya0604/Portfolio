const Navbar = ({ active, setActive }) => {
  return (
    <nav className="absolute top-0 right-0 flex justify-between items-center px-6 py-6 bg-neutral-700 text-white rounded-bl-2xl z-10">
      <ul className="flex space-x-10">
        {["About", "Resume", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer ${
              active === item.toLowerCase() ? "text-yellow-400" : "text-white"
            } transition duration-300 hover:text-yellow-400`}
            onClick={() => setActive(item.toLowerCase())}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
