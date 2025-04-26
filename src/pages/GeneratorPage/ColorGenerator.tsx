import { useEffect, useState } from "react";
import Palette from "./Palette";

const ColorGenerator: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [count, setCount] = useState<number>(5);

  const getRandomHex = (): string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor.padStart(6, "0").toUpperCase();
  };

  const fetchPalette = async () => {
    try {
      const seedColor = getRandomHex();
      const response = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=analogic&count=${count}`
      );
      const data = await response.json();
      const hexColors = data.colors.map((c: any) => c.hex.value);
      setColors(hexColors);
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
    }
  };

  useEffect(() => {
    fetchPalette();
  }, []);

  useEffect(() => {
    const handleDecrease = () => setCount((prev) => Math.max(2, prev - 1));
    const handleIncrease = () => setCount((prev) => Math.min(10, prev + 1));
    const handleGenerate = () => fetchPalette();

    window.addEventListener("decreaseColorCount", handleDecrease);
    window.addEventListener("increaseColorCount", handleIncrease);
    window.addEventListener("generatePalette", handleGenerate);

    return () => {
      window.removeEventListener("decreaseColorCount", handleDecrease);
      window.removeEventListener("increaseColorCount", handleIncrease);
      window.removeEventListener("generatePalette", handleGenerate);
    };
  }, [count]);

  useEffect(() => {
    const countElement = document.getElementById("color-count");
    if (countElement) {
      countElement.textContent = count.toString();
    }
  }, [count]);

  return (
    <div className="w-full max-w-5xl">
      <Palette colors={colors} />
    </div>
  );
};

export default ColorGenerator;
