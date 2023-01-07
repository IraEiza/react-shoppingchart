import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark"> {/* fixed-top se solapa con lo de detrás*/}
        <div className="container-fluid">
          <h1 className="navbar-brand">React Shopping Chart</h1>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;