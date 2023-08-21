import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <div className="flex">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <ul className="flex w-1/3">
          <li className="w-1/5">Pricing</li>
          <li className="w-1/5">About</li>
          <li className="w-1/5">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
