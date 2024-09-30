import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MeuPet from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Postar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const mobile = true; //useMedia("(max-width: 40rem)"); solução correta
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          arial-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        } `}
      >
        <NavLink to="/conta">
          <MeuPet />
          {mobile && "meu pet"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Postar />
          {mobile && "postar"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
