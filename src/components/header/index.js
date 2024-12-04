import React, { useState, useRef } from 'react';
import './style.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu manualmente (pode ser chamada ao clicar nos itens)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="./img/lg-blz.png" alt="Logo" className="logo" />
        <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
          &#9776; {/* Ícone do menu hamburguer */}
        </div>

        <ul className={`navbar-itens ${menuOpen ? 'show' : ''}`} ref={menuRef}>
          {menuOpen && (
            <li className="close-btn" onClick={closeMenu}>
              &#10005; {/* Ícone de fechar (X) */}
            </li>
          )}
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="#produtos" onClick={closeMenu}>Favoritos</a></li>
          <li><a href="#footer" onClick={closeMenu}>Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
