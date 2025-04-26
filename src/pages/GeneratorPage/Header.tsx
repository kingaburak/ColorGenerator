import { motion } from "framer-motion";
import ColorGenerator from "./ColorGenerator";
import catPainting from "../../assets/cat-painting.png";

function Header() {
  const handleGenerate = () => {
    window.dispatchEvent(new Event("generatePalette"));
  };

  const handleDecrease = () => {
    window.dispatchEvent(new Event("decreaseColorCount"));
  };

  const handleIncrease = () => {
    window.dispatchEvent(new Event("increaseColorCount"));
  };

  return (
    <div className="flex flex-col min-h-[80vh] items-center">
      <div className="bg-[#FFF6F7] border-4 border-beige p-8 rounded-xl mt-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row pl-20">
          <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-[#5B4B44] text-lg">Wybierz liczbę kolorów</p>
              <div className="flex items-center gap-6 text-4xl font-bold text-[#EAA6A6]">
                <motion.button
                  onClick={handleDecrease}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-3xl px-3 rounded bg-pink2 text-white hover:bg-orange hover:text-darkpink transition-colors shadow-md"
                >
                  -
                </motion.button>

                <span id="color-count" className="text-[#E39E91] text-7xl">
                  ?
                </span>

                <motion.button
                  onClick={handleIncrease}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-3xl px-3 rounded bg-pink2 text-white hover:bg-orange hover:text-darkpink transition-colors shadow-md"
                >
                  +
                </motion.button>
              </div>
            </div>

            <p className="text-[#5B4B44] font-bold text-center">
              Kliknij, żeby wygenerować nową paletę kolorów
            </p>

            <motion.button
              onClick={handleGenerate}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="bg-pink2 text-white px-20 md:px-44 py-3 text-lg font-semibold rounded-2xl hover:bg-orange hover:text-darkpink transition-colors shadow-md"
            >
              Generuj
            </motion.button>
          </div>

          <div className="md:flex flex-1 justify-center">
            <img src={catPainting} className="w-64 h-auto" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center bg-[#FCFCFC] w-full">
        <div className="max-w-6xl w-full flex justify-center px-4 md:px-8 py-8">
          <ColorGenerator />
        </div>
      </div>
    </div>
  );
}

export default Header;
