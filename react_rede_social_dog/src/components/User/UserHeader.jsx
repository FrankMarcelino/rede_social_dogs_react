import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    let newTitle = "Meu PET"; // Valor padrão

    switch (pathname) {
      case "/conta/postar":
        newTitle = "Poste a foto do seu PET!";
        break;
      case "/conta/estatisticas":
        newTitle = "Estatísticas";
        break;
      case "/conta":
        newTitle = "Meu Pet";
        break;
      default:
        break;
    }

    setTitle(newTitle);
  }, [location.pathname]); // Dependência mais específica

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
