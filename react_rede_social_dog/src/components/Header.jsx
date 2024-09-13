import React from "react";
// import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </header>
  );
};

export default Header;
