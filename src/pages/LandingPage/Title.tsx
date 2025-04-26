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
        <span key={index} className={colors[index % colors.length]}>
          {char}
        </span>
      ))}
    </h1>
  );
}

export default Title;
