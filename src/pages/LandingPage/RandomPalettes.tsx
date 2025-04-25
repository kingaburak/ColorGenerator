import React, { useEffect, useState } from "react";

interface PaletteProps {
  colors: string[];
}

const Palette: React.FC<PaletteProps> = ({ colors }) => (
  <div className="flex gap-4 mb-8 flex-wrap justify-center">
    {colors.map((color, index) => (
      <div
        key={index}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigator.clipboard.writeText(color)}
        title="Kliknij, aby skopiować"
      >
        <div
          className="w-16 h-24 rounded-xl shadow-lg mb-2 transition-transform hover:scale-105"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-mono text-[#5B4B44]">{color}</span>
      </div>
    ))}
  </div>
);

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
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 bg-[#FFF7F0] text-center">
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-blue-500">Zobacz</span>{" "}
        <span className="text-green-500">przykładowe</span>{" "}
        <span className="text-pink-500">palety kolorów!</span>
      </h2>
      <p className="text-[#5B4B44] max-w-3xl mx-auto mb-12">
        Zainspiruj się gotowymi zestawieniami, które pasują do każdego projektu!
        Niezależnie od tego, czy tworzysz stronę internetową, aranżujesz wnętrze,
        czy projektujesz logo – znajdziesz tu paletę, która idealnie wpisuje się w Twoje potrzeby.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {palettes.map((colors, idx) => (
          <Palette key={idx} colors={colors} />
        ))}
      </div>
    </div>
  );
}
