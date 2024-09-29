import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace("perdeu", "reset"),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Esqueci a senha" description="Página para esqueci a senha" />
      <h1 className="title">Esqueci a senha.</h1>
      {data ? (
        <p style={{ color: "#4BB543" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
}

export default LoginPasswordLost;
