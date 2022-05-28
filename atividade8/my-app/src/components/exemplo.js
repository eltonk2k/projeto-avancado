import React, { useState } from "react";


export function ColorExemplo(props) {
    const [tarefa, setTarefa] = useState();

    return (
        <>
            <h1>{tarefa} Tarefas </h1>
            <button
                type="button"
                onClick={() => setTarefa("Adicionar")}
            >Adicionar</button>
            <button
                type="button"
                onClick={() => setTarefa("Remover")}
            >Remover</button>
            
        </>
    );
}