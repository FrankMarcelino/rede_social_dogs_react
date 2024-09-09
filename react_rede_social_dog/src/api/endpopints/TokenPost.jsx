import React from "react";

function TokenPost() {
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
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}

export default TokenPost;
