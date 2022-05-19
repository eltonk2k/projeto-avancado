import React, { useState } from "react";

function App() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleClickEnviar = (e) => {
    alert("Dados enviados!");
  }
  const handleClickCancelar = (e) => {
    alert("Envio cancelado!");
  }



  return (
    <div className="app">
      <header className="cabecao">
        <form className="formulario">


          <h1>Formulário</h1>
          <label>Digite seu nome:</label><br />
          <input type="text" name="nome" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} /><br />

          <label>Digite seu Sobrenome:</label><br />
          <input type="text" name="sobrenome" value={sobrenome} placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} /><br />

          <label>Digite seu E-mail:</label><br />
          <input type="email" name="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /><br />

          <label>Digite sua senha:</label><br />
          <input type="password" name="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} /><br />

          <button onClick={handleClickEnviar}>Enviar</button>
          <button onClick={handleClickCancelar}>Cancelar</button>
        </form>


      </header>


    </div>
  );
}

export default App;
