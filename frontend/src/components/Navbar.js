import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      navigate("/");
    } else {
      navigate("/?q=" + value);
    }
  };

  const closeMenus = () => {
    setShowDropdown(false);
    setShowSidebar(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-left">
            <div className="hamburger" onClick={() => setShowSidebar(true)}>
              ☰
            </div>
            <Link to="/" className="brand" onClick={closeMenus}>
              Medium
            </Link>
          </div>

          <div className="nav-right">
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search stories..."
                value={search}
                onChange={handleSearch}
              />
            </div>

            <div
              className="profile-container"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="profile-icon">S</div>

              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/" onClick={closeMenus} className="dropdown-item">
                    Home
                  </Link>
                  <Link to="/contact" onClick={closeMenus} className="dropdown-item">
                    Contact
                  </Link>
                  <Link to="/" onClick={closeMenus} className="dropdown-item">
                    Blogs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showSidebar && (
        <>
          <div className="sidebar-overlay" onClick={closeMenus}></div>

          <div className="sidebar active">
            <div className="sidebar-header">
              <span className="close-btn" onClick={closeMenus}>
                ✕
              </span>
            </div>

            <div className="sidebar-links">
              <Link to="/" onClick={closeMenus} className="sidebar-link">
                Blogs
              </Link>
              <Link to="/contact" onClick={closeMenus} className="sidebar-link">
                Contact
              </Link>
              <Link to="#" onClick={closeMenus} className="sidebar-link">
                About
              </Link>
               <Link to="#" onClick={closeMenus} className="sidebar-link">
                Info
                
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
