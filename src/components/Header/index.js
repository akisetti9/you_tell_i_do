import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import "./index.css";

const Header = () => {
  let navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/006/303/711/small/book-logo-college-student-illustration-vector.jpg"
            alt="website logo"
          />

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <img
            className="website-logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/006/303/711/small/book-logo-college-student-illustration-vector.jpg"
            alt="website logo"
          />
          {/* <ul className="nav-menu">
            <li className="nav-menu-item">Home</li>
          </ul> */}
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      {/* <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-image"
            />
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Header;
