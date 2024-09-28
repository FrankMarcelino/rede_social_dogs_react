import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginCreate from "./LoginCreate.jsx";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import LoginPasswordReset from "./LoginPasswordReset.jsx";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import NotFound from "../User/NotFound.jsx";

const login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperar" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default login;
