import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue flex items-center justify-between px-8 py-2 border-b-8 border-pink rounded-b-2xl">
      <div className="flex items-center space-x-3">
        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link to="header" smooth={true} duration={1000} offset={-50}>
            <img src={logo} className="w-16 h-16" />
          </Link>
        </motion.div>
        <span className="text-white font-bold text-xl">Color Kitty</span>
      </div>

      {/* hamburger button */}
      <div className="block lg:hidden">
        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={toggleMenu}
        >
          {/* hamburger icon */}
          <motion.div
            className="w-6 h-0.5 bg-white mb-1"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          ></motion.div>

          <motion.div
            className="w-6 h-0.5 bg-white mb-1"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          ></motion.div>

          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          ></motion.div>
        </motion.div>
      </div>

      {/* navbar links for larger screens */}
      <div className=" space-x-12 text-white text-sm font-bold pl-10 hidden lg:flex">
        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link to="about" smooth={true} duration={500} offset={-50}>
            O aplikacji
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link to="palettes" smooth={true} duration={500} offset={-60}>
            Przykładowe palety
          </Link>
        </motion.div>
      </div>

      {/* dropdown menu for small screens */}
      <motion.div
        className={`lg:hidden absolute top-20 left-0 w-full text-darkblue bg-pink border-b-4 border-blue space-y-4 rounded-b-2xl py-6 text-center ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, maxHeight: isOpen ? 1000 : 0 }}
        exit={{ opacity: 0, maxHeight: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={toggleMenu}
          >
            O aplikacji
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link
            to="palettes"
            smooth={true}
            duration={500}
            offset={-60}
            onClick={toggleMenu}
          >
            Przykładowe palety
          </Link>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={() => navigate("/generator")}
          className="bg-yellow text-darkblue px-16 py-3 rounded-full text-sm font-bold shadow-md hover:bg-blue hover:text-white transition-colors mt-6"
        >
          Zacznij teraz!
        </motion.button>
      </motion.div>

      <div className="hidden lg:block">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={() => navigate("/generator")}
          className="bg-yellow text-darkblue px-16 py-3 rounded-full text-sm font-bold shadow-md hover:bg-pink hover:text-white transition-colors"
        >
          Zacznij teraz!
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
