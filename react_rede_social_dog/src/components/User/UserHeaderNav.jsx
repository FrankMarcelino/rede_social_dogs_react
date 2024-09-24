import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MeuPet from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Postar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">
        <MeuPet />
        {mobileMenu && "meu pet"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobileMenu && "estatisticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <Postar />
        {mobileMenu && "postar"}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {mobileMenu && "sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
