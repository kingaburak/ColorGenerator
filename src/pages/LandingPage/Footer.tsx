import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-purple flex items-center justify-end px-8 py-2 z-5 relative border-t-8 border-beige rounded-t-2xl">
      <div className="flex items-center space-x-3">
        <span className="text-[#3C3C7C] font-bold text-xl ">Color Kitty</span>
        <img src={logo} alt="Color Kitty logo" className="w-16 h-16" />
      </div>
    </footer>
  );
}

export default Footer;
