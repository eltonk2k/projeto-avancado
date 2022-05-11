
async function callAsync() {
    try {
        const res = await
            fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
        const resultados = await res.json();
        console.log(resultados)

        const estados = document.getElementById("estado")

        resultados.forEach(element => {
            const varrerListEstados = document.createElement("option") 
            varrerListEstados.innerText = element.nome
            estados.appendChild(varrerListEstados)
        });
        
    } catch (error) {
        console.log(error);
    }
}
window.addEventListener("load", callAsync)





async function callAsync() {
    try {
        const res = await
            fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios");
        const resultados = await res.json();
        console.log(resultados)

        const estados = document.getElementById("estado")

        resultados.forEach(element => {
            const varrerListEstados = document.createElement("option") 
            varrerListEstados.innerText = element.nome
            estados.appendChild(varrerListEstados)
        });
        
    } catch (error) {
        console.log(error);
    }
}



