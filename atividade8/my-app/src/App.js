import './App.css';
import { EntradaDeTarefa } from "./components/EntradaDeTarefa"
import { ListaDeTarefa } from "./components/ListaDeTarefa"

import { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState("")


  return (
    <div>
      <h2>Tarefas</h2>
      <ListaDeTarefa tarefas={tarefas} />
      <EntradaDeTarefa
        tarefa={tarefa}
        tarefas={tarefas}
        setTarefas={setTarefas}
        setTarefa={setTarefa}
      />
    </div>
  );
}

export default App;
