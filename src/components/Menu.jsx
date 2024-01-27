import React from "react";
import "./Menu.css";

function Menu({ links, className }) {
  return (
    <nav className={className}>
      
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      
    </nav>
  );
}

export default Menu;