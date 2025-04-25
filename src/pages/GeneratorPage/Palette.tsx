import ColorBox from "./ColorBox";

type PaletteProps = {
  colors: string[];
};

const Palette = ({ colors }: PaletteProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {colors.map((hex, index) => (
        <ColorBox key={index} hex={hex} />
      ))}
    </div>
  );
};

export default Palette;
