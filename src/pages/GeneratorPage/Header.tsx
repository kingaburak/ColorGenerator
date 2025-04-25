import ColorGenerator from "./ColorGenerator";
import catPainting from "../../assets/cat-painting.png";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-10 mt-20">
      <div className="flex-1">
        <ColorGenerator />
      </div>

      <div className="flex-1 flex justify-center">
        <img src={catPainting} alt="Kot malujący" className="w-64 h-auto " />
      </div>
    </div>
  );
}

export default Header;
