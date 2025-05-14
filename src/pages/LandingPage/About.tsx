import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import catRainbow from "../../assets/cat-rainbow.png";
import paletteIcon from "../../assets/palette.png";
import diceIcon from "../../assets/dice.png";
import copyIcon from "../../assets/copy.png";

const points = [
  {
    title: "Twórz własne palety kolorów!",
    description:
      "Dopasuj kolory do swojego projektu, strony internetowej, wnętrza lub innych potrzeb. Eksperymentuj z odcieniami i twórz harmonijne zestawienia kolorystyczne.",
    icon: paletteIcon,
  },
  {
    title: "Losuj do skutku",
    description:
      "Kliknij raz, a aplikacja wygeneruje nową paletę. Jeśli ta Ci nie odpowiada, spróbuj kolejnej, aż znajdziesz idealne zestawienie kolorów.",
    icon: diceIcon,
  },
  {
    title: "Kopiuj kody kolorów",
    description:
      "Kopiuj kody kolorów w formacie HEX i od razu używaj ich w swoim projekcie. Prosto i szybko.",
    icon: copyIcon,
  },
];

const About: React.FC = () => {
  const [hoverCat, setHoverCat] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generator");
  };

  const catRef = useRef(null);
  const isCatInView = useInView(catRef, { once: true });

  return (
    <section
      id="about"
      className="w-full bg-[#FFF6EC] py-20 px-12 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-16"
    >
      <div className="max-w-xl w-full space-y-8">
        {points.map((point, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-10"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-20 h-20 flex items-center justify-center aspect-square"
              >
                <motion.img
                  src={point.icon}
                  alt={`Ikona ${point.title}`}
                  className="w-full h-full object-contain mt-8 p-0"
                />
              </motion.div>

              <div>
                <h4 className="text-darkblue font-bold text-xl pt-6">
                  {point.title}
                </h4>
                <p className="text-sm mt-1">{point.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="flex flex-col items-center relative"
        ref={catRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isCatInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <div
          className="relative w-72 h-auto"
          onMouseEnter={() => setHoverCat(true)}
          onMouseLeave={() => setHoverCat(false)}
        >
          <motion.img
            src={catRainbow}
            className="w-full h-auto object-contain ml-1"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.div
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-pink rounded-xl px-4 py-4 shadow-lg text-sm whitespace-nowrap z-10"
            initial={{ opacity: 0, y: 5 }}
            animate={hoverCat ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            kliknij w przycisk żeby rozpocząć!
          </motion.div>
        </div>

        <motion.button
          onClick={handleClick}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-orange text-white px-28 py-4 rounded-full text-sm font-semibold shadow-md hover:bg-pink transition-colors mt-6"
        >
          Zaczynamy!
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
