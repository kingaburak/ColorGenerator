import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Buttons() {
  return (
    <div className="flex space-x-6 mt-10 text-xs justify-center w-full">
      <Link to="/generator">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-purple text-white font-bold px-8 py-4 rounded-full text-sm shadow-md hover:bg-green transition-colors"
        >
          Zacznij generowanie kolorów
        </motion.button>
      </Link>

      <Link to="/examples">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-blue text-white font-bold px-8 py-4 rounded-full text-sm shadow-md hover:bg-orange transition-colors"
        >
          Zobacz przykładowe palety
        </motion.button>
      </Link>
    </div>
  );
}

export default Buttons;
