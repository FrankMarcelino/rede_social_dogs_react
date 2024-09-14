import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("token", json.token);
      });
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Usuário"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/login/criar">Login Criar</Link>
    </section>
  );
}

export default LoginForm;
