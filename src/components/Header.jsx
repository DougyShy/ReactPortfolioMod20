/* HEADER.JSX */
import '../styles/Header.css';

// Custom styles here if desired //
///////////////////////////////////

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <h1>Clinton Scheible</h1>
      <div>
        <ul>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </header>        
  );
}

export default Header;
