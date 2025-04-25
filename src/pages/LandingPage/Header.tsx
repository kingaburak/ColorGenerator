import { Link } from "react-router-dom";
import catImage from "../../assets/cat-rainbow.png";

function Header() {
  return (
    <div className="bg-yellow min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src={catImage}
            alt="Tęczowy kot"
            className="max-h-[50vh] object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            {[
              "C",
              "o",
              "l",
              "o",
              "r",
              " ",
              "G",
              "e",
              "n",
              "e",
              "r",
              "a",
              "t",
              "o",
              "r",
            ].map((char, index) => {
              const colors = [
                "text-darkpink",
                "text-darkpurple",
                "text-green",
                "text-blue",
                "text-darkblue",
                "text-transparent",
                "text-darkpink",
                "text-darkpurple",
                "text-green",
                "text-blue",
                "text-darkblue",
                "text-darkpink",
                "text-darkpurple",
                "text-green",
                "text-blue",
              ];
              return (
                <span key={index} className={colors[index % colors.length]}>
                  {char}
                </span>
              );
            })}
          </h1>

          <p className="text-blue-500 text-lg mb-2">
            Szukasz idealnej palety kolorów?
          </p>
          <p className="text-blue-500 text-lg mb-6">
            Miauśnij przycisk i zaczynamy zabawę z barwami!
          </p>

          <Link to="/generator">
            <button className="bg-purple hover:bg-blue text-white font-bold px-6 py-3 rounded-xl transition">
              Zacznij generowanie kolorów
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
