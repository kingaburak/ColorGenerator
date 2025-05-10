import { useState } from "react";
import { motion } from "framer-motion";

type ColorBoxProps = {
  hex: string;
};

const ColorBox = ({ hex }: ColorBoxProps) => {
  const [message, setMessage] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setMessage(`Kolor ${hex} został skopiowany!`);

    // resetowanie wiadomsoci po 2 sekundach
    setTimeout(() => setMessage(""), 2000);
  };

  // obliczamy jaki kolor dac
  const getLuminance = (hex: string) => {
    // zmiana na rgb
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    //obliczamy jasnosc
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  // ustawiamy kolor na czarny lub bialy
  const getTextColor = (hex: string) => {
    return getLuminance(hex) < 128 ? "white" : "black";
  };

  const textColor = getTextColor(hex);

  return (
    <div className="relative">
      <motion.div
        onClick={handleCopy}
        style={{ backgroundColor: hex }}
        className="w-24 h-32 sm:w-28 sm:h-40 m-2 rounded-xl shadow-md cursor-pointer flex items-end justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <span className="font-medium text-lg mb-3" style={{ color: textColor }}>
          {hex.toLowerCase()}
        </span>
      </motion.div>

      {message && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded-xl text-sm shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.div>
      )}
    </div>
  );
};

export default ColorBox;
