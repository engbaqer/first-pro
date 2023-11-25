import Container from "../Container/Container";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header">
          <h3>Baqer M.</h3>
          <div className="links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <button>Join Us</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
