

export function Botao(props) {
    return (

        <button onClick={() => alert(props.value)}>{props.text}</button>

        
    );
    
    
}
