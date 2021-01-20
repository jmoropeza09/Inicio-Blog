import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>Mi Blog personal</Titulo>
      <Manu>
        <NavLink to="/" exact={true}>Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="acerca-de">Acerca de</NavLink>
      </Manu>
    </ContenedorHeader>
  );
};
export default Header;

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;
const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Manu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }

  a:hover {
    color: #191668;
  }

  a.active {
      border-bottom: 2px solid #165168;
      padding-bottom: 3px;
  }
`;
