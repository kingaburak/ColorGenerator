import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Buttons() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-10 text-xs justify-center w-full px-4">
      <RouterLink to="/generator">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-purple text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm shadow-md hover:bg-green transition-colors w-[90%] max-w-xs mx-auto sm:w-auto"
        >
          Zacznij generowanie kolorów
        </motion.button>
      </RouterLink>

      <Link to="palettes" smooth={true} duration={500} offset={-60}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-blue text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm shadow-md hover:bg-orange transition-colors w-[90%] max-w-xs mx-auto sm:w-auto"
        >
          Zobacz przykładowe palety
        </motion.button>
      </Link>
    </div>
  );
}

export default Buttons;
