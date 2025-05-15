import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { useState, useEffect, useRef } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);  // Reference to the menu
  const menuIconRef = useRef(null);  // Reference to the hamburger icon

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(e.target) && 
        !menuIconRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <div className="brand">
        <Link to="/">
          <img src="/favicon-3.png" alt="Tanishq's Home Page" />
        </Link>
      </div>

      <div ref={menuRef} className={`other-navs ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Tech Stack</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="https://tanishqsportfoliovercel.wordpress.com/" onClick={() => setMenuOpen(false)} target="_blank">Blogs</Link>
      </div>

      <div ref={menuIconRef} className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;