import React, { useEffect, useState } from "react";
import Palette from "./Palette";

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

const RandomPalettes: React.FC = () => {
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
      <p className="text-black max-w-3xl mx-auto mb-12">
        Zainspiruj się gotowymi zestawieniami, które pasują do każdego projektu!
        Niezależnie od tego, czy tworzysz stronę internetową, aranżujesz
        wnętrze, czy projektujesz logo - znajdziesz tu paletę, która idealnie
        wpisuje się w Twoje potrzeby.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center relative">
        {palettes.map((colors, idx) => (
          <Palette key={idx} colors={colors} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default RandomPalettes;
