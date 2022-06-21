import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>

        </ul>
      </div>
    </header>
  );
}

export default Header;
