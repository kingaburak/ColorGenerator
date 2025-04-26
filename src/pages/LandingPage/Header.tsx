import Title from "./Title";
import TypingText from "./TypingText";
import Buttons from "./Buttons";

function Header() {
  return (
    <div
      id="header"
      className="bg-yellow min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center max-w-7xl w-full text-center">
        <Title />
        <TypingText />
        <Buttons />
      </div>
    </div>
  );
}

export default Header;
