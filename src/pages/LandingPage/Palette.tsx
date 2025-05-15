import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface PaletteProps {
  colors: string[];
  index: number;
}

const Palette: React.FC<PaletteProps> = ({ colors, index }) => {
  const [message, setMessage] = useState<string>("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleClick = (color: string) => {
    navigator.clipboard.writeText(color);
    setMessage(`Kolor ${color} został skopiowany!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex gap-2 sm:gap-4 mb-6 flex-wrap justify-center max-w-xs sm:max-w-none"
    >
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleClick(color)}
          title="Kliknij, aby skopiować"
        >
          <motion.div
            className="w-12 h-20 sm:w-16 sm:h-24 rounded-xl shadow-lg mb-1 sm:mb-2"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <span className="text-[0.65rem] sm:text-sm font-mono text-[#5B4B44]">
            {color}
          </span>
        </div>
      ))}
      {message && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black px-3 py-1.5 rounded-xl text-xs shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Palette;
