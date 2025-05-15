import { useState, useEffect } from "react";

function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);

  const phrases = [
    "Zobacz, jak łatwo możesz stworzyć idealną paletę kolorów!",
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
    <p className="text-darkblue font-bold md:text-xl mb-6">
      {text}
      <span className="cursor-blink">|</span>
    </p>
  );
}

export default TypingText;
