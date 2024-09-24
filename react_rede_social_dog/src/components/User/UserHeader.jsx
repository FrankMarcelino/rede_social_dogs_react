import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom"; // Correção: importe o useLocation corretamente

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation(); // Correção: "const" em vez de "cosnt"

  React.useEffect(() => {
    const { pathname } = location;
    let newTitle = "Minha conta"; // Valor padrão

    switch (pathname) {
      case "/conta/postar":
        newTitle = "Poste sua foto";
        break;
      case "/conta/estatisticas":
        newTitle = "Estatísticas";
        break;
      case "/conta":
        newTitle = "Minha conta";
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
