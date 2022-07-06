import Button from "./Button";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">
          <img src="./Images/logo.png" alt="ESTATERY" />
        </div>

        <div className="links">
          <ul className="routes">
            <li className="route">
              <a href="/">Rent</a>
            </li>
            <li className="route">
              <a href="/">Buy</a>
            </li>
            <li className="route">
              <a href="/">Sell</a>
            </li>
            <li className="dropdown">
              <p>Manage Property ⬇️</p>

              <div className="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
            </li>

            <li className="dropdown">
              <p>Resources ⬇️</p>

              <div className="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="login">
          <Button text="Login" isBg={false}/>
        </div>

        <div className="signup">
            <Button text="Sign Up" isBg={true}/>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
