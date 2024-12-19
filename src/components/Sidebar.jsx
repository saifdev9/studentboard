import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="logo-placeholder.png" alt="DBOS Logo" />
        <h1>Dihing Board of Open Schooling</h1>
      </div>
      <div className="user-info">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-pic"
        />
        <h2>ALMINA AHAMED</h2>
      </div>
      <nav>
        <NavLink to="profile" className="nav-link">
          Student Profile
        </NavLink>
        <NavLink to="syllabus" className="nav-link">
          Syllabus Download
        </NavLink>
        <NavLink to="study-material" className="nav-link">
          Study Material Download
        </NavLink>
        <NavLink to="admit" className="nav-link">
          Admit Download
        </NavLink>
        <NavLink to="result" className="nav-link">
          Result Download
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
