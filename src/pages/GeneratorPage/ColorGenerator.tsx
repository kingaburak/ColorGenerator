import { useState } from "react";
import Palette from "./Palette";

const ColorGenerator: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);

  const getRandomHex = (): string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor.padStart(6, "0").toUpperCase();
  };

  const fetchPalette = async () => {
    try {
      const seedColor = getRandomHex();
      const mode = "analogic";
      const response = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=5`
      );
      const data = await response.json();
      const hexColors = data.colors.map((c: any) => c.hex.value);
      setColors(hexColors);
    } catch (error) {
      console.error("blad pobierania dancyh:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <button
        onClick={fetchPalette}
        className="mb-6 px-20 py-4 mt-20 bg-pink2 text-white font-bold rounded-xl hover:bg-blue transition"
      >
        Generuj nową paletę
      </button>
      <Palette colors={colors} />
    </div>
  );
};

export default ColorGenerator;
