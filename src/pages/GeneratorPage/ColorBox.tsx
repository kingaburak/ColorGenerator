import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type ColorBoxProps = {
  hex: string;
};

const ColorBox = ({ hex }: ColorBoxProps) => {
  const [message, setMessage] = useState<string>("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setMessage(`Kolor ${hex} został skopiowany!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const getLuminance = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const getTextColor = (hex: string) => {
    return getLuminance(hex) < 128 ? "white" : "black";
  };

  const textColor = getTextColor(hex);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
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
          className="absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black px-4 py-2 rounded-xl text-sm shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {message}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ColorBox;
