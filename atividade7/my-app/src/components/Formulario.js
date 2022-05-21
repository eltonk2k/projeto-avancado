import { Botao } from "./Botao";
import { CaixaDeTexto } from "./CaixaDeTexto";
import { Senha } from "./Senha";
import "./formulario.css";
 

export function Formulario(props) {
    return (
        <form>
            <label>Nome:<CaixaDeTexto text="Nome"/></label>
            <label>Sobrenome:<CaixaDeTexto text="Sobrenome"/></label>
            <label>E-mail:<CaixaDeTexto text="E-mail"/></label>

            <label>Senha:<Senha text="Senha" /></label>


            <Botao text="Enviar" value="Dados enviados!" />
            <Botao text="Cancelar" value="Envio cancelado!" />


        </form>
    
    );
    
}
