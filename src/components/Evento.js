import { useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  return (
    <div>
      <button onClick={() => setMensagem("Você clicou no botão!")}>
        Clique aqui
      </button>

      <p>{mensagem}</p>
    </div>
  );
}

export default App;