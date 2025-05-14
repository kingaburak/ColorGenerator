import React, { useEffect, useRef, useState } from "react";
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

const getRandomHex = (): string => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor.padStart(6, "0").toUpperCase();
};

const fetchPalette = async (): Promise<string[]> => {
  const seedColor = getRandomHex();
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=analogic&count=5`
  );
  const data = await response.json();
  return data.colors.map((c: any) => c.hex.value);
};

export default function RandomPalettes() {
  const [palettes, setPalettes] = useState<string[][]>([]);

  useEffect(() => {
    const generatePalettes = async () => {
      const newPalettes: string[][] = [];
      for (let i = 0; i < 10; i++) {
        const palette = await fetchPalette();
        newPalettes.push(palette);
      }
      setPalettes(newPalettes);
    };

    generatePalettes();
  }, []);

  return (
    <section
      id="palettes"
      className="max-w-7xl mx-auto px-6 md:px-20 py-12 bg-[#FFF7F0] text-center"
    >
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-darkblue">Zobacz </span>
        <span className="text-green">przykładowe </span>
        <span className="text-darkpink">palety </span>
        <span className="text-blue">kolorów! </span>
      </h2>
      <p className="text-[#5B4B44] max-w-3xl mx-auto mb-12">
        Zainspiruj się gotowymi zestawieniami, które pasują do każdego projektu!
        Niezależnie od tego, czy tworzysz stronę internetową, aranżujesz
        wnętrze, czy projektujesz logo – znajdziesz tu paletę, która idealnie
        wpisuje się w Twoje potrzeby.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center relative">
        {palettes.map((colors, idx) => (
          <Palette key={idx} colors={colors} index={idx} />
        ))}
      </div>
    </section>
  );
}
