type ColorBoxProps = {
  hex: string;
};

const ColorBox = ({ hex }: ColorBoxProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    alert(`Skopiowano: ${hex}`);
  };

  return (
    <div
      onClick={handleCopy}
      style={{ backgroundColor: hex }}
      className="w-28 h-40 m-2 rounded-xl shadow-md cursor-pointer flex items-end justify-center"
    >
      <span className="text-[#3B2F2F] font-medium text-lg mb-3">
        {hex.toLowerCase()}
      </span>
    </div>
  );
};

export default ColorBox;
