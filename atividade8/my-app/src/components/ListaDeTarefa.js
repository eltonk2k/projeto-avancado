
export function ListaDeTarefa(props) {
  return (
    <ul>
      {props.tarefas.map((item, index) => (
        <li key={index} className={"on"} id="cortado">
          <input type="checkbox" key={index}  id="cortar" />
          {console.log(teste.value)}
          {console.log(index)}
          {item}
        </li>
      ))}
    </ul>
  );
  
  function teste(props){
    const cortado = document.querySelector("#cortado")
    const cortar = document.querySelector("#cortar")
      if(cortado.key === cortar.Key){
        return
      }
    }
    
}