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
    <div className="flex flex-col min-h-[80vh] items-center w-full">
      <div className="w-full bg-[#FFF6F7] border-b-4 border-beige pb-2 pt-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="flex-1 pl-20 flex flex-col items-center md:items-start justify-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-[#5B4B44] text-lg">Wybierz liczbę kolorów</p>
              <div className="flex items-center gap-6 text-4xl font-bold text-[#EAA6A6]">
                <motion.button
                  onClick={handleDecrease}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-3xl px-3 rounded bg-[#FBE6E7] hover:bg-[#FAD3D4]"
                >
                  -
                </motion.button>

                <span id="color-count" className="text-[#E39E91] text-7xl">
                  ?
                </span>

                <motion.button
                  onClick={handleIncrease}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-3xl px-3 rounded bg-[#FBE6E7] hover:bg-[#FAD3D4]"
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
              className="bg-pink2 text-white px-20 md:px-44 py-3 text-lg font-semibold rounded-2xl hover:bg-purple transition-colors shadow-md"
            >
              Generuj
            </motion.button>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <img src={catPainting} className="w-64 h-auto" alt="Cat Painting" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center bg-[#FCFCFC] w-full">
        <ColorGenerator />
      </div>
    </div>
  );
}

export default Header;
