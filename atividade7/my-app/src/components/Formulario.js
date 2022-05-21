import { Botao } from "./Botao";
import { CaixaDeTexto } from "./CaixaDeTexto";
import { Senha } from "./Senha";

 

export function Formulario(props) {
    return (
        <form className="cabecao">
            <label>Nome:<CaixaDeTexto text="Nome"/></label>
            <label>Sobrenome:<CaixaDeTexto text="Sobrenome"/></label>
            <label>Nome:<CaixaDeTexto text="E-mail"/></label>
            <label>Senha:<Senha text="Senha" /></label>
            <Botao text="Enviar" value="Dados enviados!" />
            <Botao text="Cancelar" value="Envio cancelado!" />


        </form>
    
    );
    
}
