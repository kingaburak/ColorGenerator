type ColorBoxProps = {
  hex: string;
};

const ColorBox = ({ hex }: ColorBoxProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    alert(`skopiowano: ${hex}`);
  };

  return (
    <div
      onClick={handleCopy}
      style={{ backgroundColor: hex }}
      className="w-32 h-32 m-2 rounded-lg shadow-lg cursor-pointer flex items-end justify-center text-white font-bold"
    >
      <span className="bg-black bg-opacity-50 px-2 py-1 rounded">{hex}</span>
    </div>
  );
};

export default ColorBox;
