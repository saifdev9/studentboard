const Header = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <h2>Student Profile / CMS Student Profile</h2>
      <div className="header-actions">
        <p>{today}</p>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
