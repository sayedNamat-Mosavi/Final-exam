import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Books">Books</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
        <div className="profile">
          <FaUserAlt />

        </div>

      </nav>
    </header>
  );
}
export default Header;
