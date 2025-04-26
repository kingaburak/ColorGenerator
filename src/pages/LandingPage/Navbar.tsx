import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue flex items-center justify-between px-8 py-2 border-b-8 border-pink rounded-b-2xl">
      <div className="flex items-center space-x-3">
        <img src={logo} className="w-16 h-16" />
        <span className="text-white font-bold text-xl">Color Kitty</span>
      </div>

      <div className="flex space-x-6 text-white text-sm font-bold pl-10">
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

      <div>
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
