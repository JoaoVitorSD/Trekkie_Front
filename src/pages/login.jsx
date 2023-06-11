import Header from "src/components/header.jsx";
import React, { useState } from "react";
import styles from "src/styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [document, setDocument] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
  };
  return (
    <>
      <title>Login</title>
      <main className={styles["container"]}>
        <div className={styles["form-container"]}>
          <form onSubmit={handleSubmit} className={styles["login-form"]}>
            <label className={styles["login-form"]}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles["login-input"]}
              required
            />
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles["login-input"]}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <div className={styles["login-box"]}>
            <h1 className={styles["login-box-title"]}>Trekkie</h1>
            <p className={styles["login-box-paragraph"]}>
              Praticar esportes ao ar livre traz uma série de benefícios que vão
              além da atividade física em si. É uma experiência que envolve
              conexão com a natureza, liberdade e uma sensação revigorante de
              bem-estar.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
