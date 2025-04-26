import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import catRainbow from "../../assets/cat-rainbow.png";

const points = [
  {
    title: "Twórz własne palety kolorów!",
    description:
      "Dobierz kolory idealne do projektu, bloga, pokoju... albo futerka! Mieszaj, łącz i baw się odcieniami jak prawdziwy artysta!",
  },
  {
    title: "Losuj do skutku",
    description:
      "Jedno kliknięcie i… bum! Nowa paleta gotowa. Nie podoba się? Klikaj dalej, aż trafisz na tę idealną!",
  },
  {
    title: "Kopiuj kody kolorów",
    description:
      "HEX? RGB? Nie ma sprawy! Skopiuj kod i używaj go w swoim projekcie w sekundę.",
  },
];

const About: React.FC = () => {
  const [hoverCat, setHoverCat] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generator");
  };

  return (
    <section
      id="about"
      className="w-full bg-[#FFF6EC] px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-16"
    >
      <div className="max-w-xl w-full space-y-8">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-pink-500 font-bold text-2xl">{index + 1}.</div>
            <div>
              <h4 className="text-blue-600 font-semibold text-lg">
                {point.title}
              </h4>
              <p className="text-blue-500 text-sm mt-1">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 relative">
        <div
          className="relative w-64 h-auto"
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
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-blue-500 px-4 py-2 rounded-xl shadow-lg text-sm whitespace-nowrap z-10"
            initial={{ opacity: 0, y: 5 }}
            animate={hoverCat ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            kliknij w przycisk żeby zacząć!
          </motion.div>
        </div>

        <motion.button
          onClick={handleClick}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-orange text-white px-28 py-4 rounded-full text-sm font-semibold shadow-md hover:bg-pink transition-colors"
        >
          Zaczynamy!
        </motion.button>
      </div>
    </section>
  );
};

export default About;
