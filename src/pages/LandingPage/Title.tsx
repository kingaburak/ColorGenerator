import { motion } from "framer-motion";

function Title() {
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
  ];

  const titleText = "Color Generator";

  return (
    <h1 className="text-7xl font-bold mb-6 leading-tight">
      {titleText.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`${colors[index % colors.length]}`}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          style={{
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            display: "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}

export default Title;
