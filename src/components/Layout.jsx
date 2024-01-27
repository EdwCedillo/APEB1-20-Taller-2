import React from "react";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Menu links={links} />
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; Punto Ferretero Copyright 2023</p>
      </footer>
    </div>
  );
}

export default Layout;