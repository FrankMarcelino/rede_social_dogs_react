import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";

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
        <Input
          label="Usuário"
          type="text"
          value={username}
          onChange={setUsername}
        />

        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={setPassword}
        />

        <button type="submit">Entrar</button>
      </form>
      <Link to="/login/criar">Login Criar</Link>
    </section>
  );
}

export default LoginForm;
