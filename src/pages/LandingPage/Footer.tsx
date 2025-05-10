import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");

    setTimeout(() => {
      scroller.scrollTo("header", {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }, 100);
  };

  return (
    <footer className="bg-purple flex items-center justify-end px-8 py-2 z-5 relative border-t-8 border-beige rounded-t-2xl">
      <div className="flex items-center space-x-3">
        <span className="text-[#3C3C7C] font-bold text-xl">Color Kitty</span>
        <motion.img
          src={logo}
          alt="Color Kitty logo"
          className="w-16 h-16 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={handleClick}
        />
      </div>
    </footer>
  );
}

export default Footer;
