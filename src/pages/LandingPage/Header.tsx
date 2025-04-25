import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);

  const phrases = [
    "Odkryj, jak łatwo możesz stworzyć idealną paletę kolorów!",
    "Twórz wyjątkowe kombinacje, które ożywią Twój projekt!",
    "Jedno kliknięcie i gotowe!",
  ];

  const typingSpeed = 50;
  const backspacingSpeed = 30;
  const delayBetweenPhrases = 1500;

  useEffect(() => {
    if (!isBackspacing) {
      if (index < phrases[currentPhraseIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + phrases[currentPhraseIndex][index]);
          setIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setIsBackspacing(true);
        }, delayBetweenPhrases);
      }
    } else {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, prev.length - 1));
          setIndex((prev) => prev - 1);
        }, backspacingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setIsBackspacing(false);
          setCurrentPhraseIndex((prev) =>
            prev === phrases.length - 1 ? 0 : prev + 1
          );
          setIndex(0);
        }, delayBetweenPhrases);
      }
    }
  }, [index, currentPhraseIndex, isBackspacing, phrases]);

  return (
    <div className="bg-yellow min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center max-w-7xl w-full gap-8">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            {[
              "C",
              "o",
              "l",
              "o",
              "r",
              " ",
              "G",
              "e",
              "n",
              "e",
              "r",
              "a",
              "t",
              "o",
              "r",
            ].map((char, index) => {
              const colors = [
                "text-darkpink",
                "text-darkpurple",
                "text-green",
                "text-blue",
                "text-darkblue",
                "text-transparent",
                "text-darkpink",
                "text-darkpurple",
                "text-green",
                "text-blue",
              ];
              return (
                <span key={index} className={colors[index % colors.length]}>
                  {char}
                </span>
              );
            })}
          </h1>

          <p className="text-darkblue font-bold text-xl mb-6">
            {text}
            <span className="cursor-blink">|</span>
          </p>

          <div className="flex space-x-6 mt-10 text-xs justify-center w-full">
            <Link to="/generator">
              <button className="bg-purple hover:bg-green text-white font-bold px-6 py-3 rounded-xl transition">
                Zacznij generowanie kolorów
              </button>
            </Link>

            <Link to="/examples">
              <button className="bg-blue hover:bg-orange text-white font-bold px-6 py-3 rounded-xl transition">
                Zobacz przykładowe palety
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
