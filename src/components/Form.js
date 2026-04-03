import { useState } from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [lista, setLista] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // evita recarregar a página

    if (!nome || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoItem = {
      nome,
      email
    };

    setLista([...lista, novoItem]);

    // limpa os campos
    setNome("");
    setEmail("");
  }

  return (
    <>
      <h2>Formulário</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      <h3>Lista:</h3>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Form;