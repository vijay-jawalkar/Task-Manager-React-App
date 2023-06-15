import Logo from "../assets/tasklogo.png";
import "./Header.css";

export function Header() {
  return (
    <div>
      <div className="navbar">
        <h1> Home </h1>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}
