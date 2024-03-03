// components/Navbar.js

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '10px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', position: 'relative' }}>
        Dashboard
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/assets/"
          alt="Search Icon"
          style={{ height: '24px', width: '24px', marginRight: '10px' }}
        />
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none', fontSize: '1rem', paddingLeft: '30px', color: 'black', backgroundColor: '#77777721', borderRadius: 8, width: 300 }}
          />
          <FaSearch style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#777' }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
