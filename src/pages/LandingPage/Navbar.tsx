import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue flex items-center justify-between px-8 py-2 border-b-8 border-pink rounded-b-2xl ">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Color Kitty logo" className="w-16 h-16" />
        <span className="text-white font-bold text-xl">Color Kitty</span>
      </div>

      <div className="flex space-x-6 text-white text-sm font-bold">
        <a href="#about" className="hover:underline">
          O aplikacji
        </a>
        <a href="#palettes" className="hover:underline">
          Przykładowe palety
        </a>
      </div>

      <div>
        <button className="bg-yellow text-darkblue font-medium px-12 py-2 rounded-xl shadow hover:opacity-90 transition">
          Zacznij teraz
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
