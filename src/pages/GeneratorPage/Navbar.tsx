import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue flex items-center justify-between px-8 py-2 border-b-8 border-pink rounded-b-2xl">
      <div className="flex items-center space-x-3">
        <motion.img
          src={logo}
          className="w-16 h-16"
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={() => navigate("/")}
        />
        <span className="text-white font-bold text-xl">Color Kitty</span>
      </div>

      {/* hamburger button */}
      <div className="block lg:hidden" onClick={toggleMenu}>
        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
      <div className="hidden lg:flex space-x-6 text-white text-sm font-bold pl-10 justify-center flex-1">
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          O aplikacji
        </motion.a>
        <motion.a
          href="#palettes"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          Przykładowe palety
        </motion.a>
      </div>

      {/* wroc do strony button for larger screens */}
      <div className="hidden lg:block">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={() => navigate("/")}
          className="bg-yellow text-darkblue px-12 py-3 rounded-full text-sm font-bold shadow-md hover:bg-pink hover:text-white transition-colors"
        >
          Wróć do strony głównej
        </motion.button>
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
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={toggleMenu}
          className="block"
        >
          O aplikacji
        </motion.a>
        <motion.a
          href="#palettes"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={toggleMenu}
          className="block"
        >
          Przykładowe palety
        </motion.a>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={() => navigate("/")}
          className="bg-yellow text-darkblue px-12 py-3 rounded-full text-sm font-bold shadow-md hover:bg-pink hover:text-white transition-colors mt-6"
        >
          Wróć do strony głównej
        </motion.button>
      </motion.div>
    </nav>
  );
}

export default Navbar;
