import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/Header.css';

function Header() {
  return (
    <header className='header'>
      <h1>E-Cube Movie Ticket Booking</h1>
      <div className="nav">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/latest-movies"> Latest Movies</Link> </button>
        <button><Link to="/events">Nearby Events</Link>  </button>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/Header.css';

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">E-Cube</div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/latest-movies">Latest Movies</Link></li>
//           <li><Link to="/upcoming-movies">Upcoming Movies</Link></li>
//           <li><Link to="/nearby-events">Nearby Events</Link></li>
//         </ul>
//       </nav>
//       <input type="text" placeholder="Search" className="search-bar" />
//     </header>
//   );
// }

// export default Header;
