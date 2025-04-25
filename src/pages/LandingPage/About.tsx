import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full px-6 py-20 bg-[#FFF6EC] flex items-center justify-center">
      <div className="max-w-5xl w-full text-center space-y-10">
        <h2 className="text-5xl font-bold text-darkpink">
          Twórz własne palety kolorów!
        </h2>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Dobierz kolory idealne do projektu, bloga, pokoju... albo futerka!
            Mieszaj, łącz i baw się odcieniami jak prawdziwy artysta!
          </p>

          <p>
            <span className="font-semibold text-blue-500">
              Losuj do skutku —
            </span>
            Jedno kliknięcie i… bum! Nowa paleta gotowa. Nie podoba się? Klikaj
            dalej, aż trafisz na tę idealną!
          </p>

          <p>
            <span className="font-semibold text-blue-500">
              Kopiuj kody kolorów —
            </span>
            HEX? RGB? Nie ma sprawy! Skopiuj kod i używaj go w swoim projekcie w
            sekundę.
          </p>
        </div>

        {/* Przycisk */}
        <Link to="/generator">
          <button className="mt-6 bg-orange hover:bg-blue text-white font-bold px-6 py-3 rounded-xl transition">
            Zacznij generowanie kolorów
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
