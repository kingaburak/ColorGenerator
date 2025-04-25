import ColorGenerator from "./ColorGenerator";
import catPainting from "../../assets/cat-painting.png";

function Header() {
  return (
    <div className="flex flex-col h-[80vh] items-center ">
      <div className="flex flex-1 bg-[#FFF6F7] px-6 md:px-20 mt-20 gap-24 items-center justify-between">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <p className="text-[#5B4B44] text-lg md:text-xl whitespace-nowrap">
              Wybierz liczbę kolorów
            </p>
            <div className="flex items-center gap-6 text-4xl font-bold text-[#EAA6A6]">
              <button
                onClick={() =>
                  window.dispatchEvent(new Event("decreaseColorCount"))
                }
                className="text-3xl px-3 rounded bg-[#FBE6E7] hover:bg-[#FAD3D4]"
              >
                -
              </button>
              <span id="color-count" className="text-[#E39E91] text-7xl">
                ?
              </span>
              <button
                onClick={() =>
                  window.dispatchEvent(new Event("increaseColorCount"))
                }
                className="text-3xl px-3 rounded bg-[#FBE6E7] hover:bg-[#FAD3D4]"
              >
                +
              </button>
            </div>
          </div>

          <p className="text-[#5B4B44] font-bold text-center">
            Kliknij, żeby wygenerować nową paletę kolorów
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event("generatePalette"))}
            className="bg-[#F2BDBD] text-white px-44 py-3 text-lg font-semibold rounded-2xl hover:bg-[#E59B9B] transition"
          >
            Generuj
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <img src={catPainting} className="w-64 h-auto" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center bg-[#FCFCFC]">
        <ColorGenerator />
      </div>
    </div>
  );
}

export default Header;
