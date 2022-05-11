
async function getEstados() {
    try {
        const res = await
            fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
        const resultados = await res.json();
        console.log(resultados)

        const estados = document.getElementById("estado")

        resultados.forEach(element => {
            const varrerListEstados = document.createElement("option") 
            varrerListEstados.innerText = element.nome
            varrerListEstados.value = element.sigla
            
            estados.appendChild(varrerListEstados)
        });
        
    } catch (error) {
        console.log(error);
    }
}
window.addEventListener("load", getEstados)


async function getMunicipios() {
    try {
        const res = await
            fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios");
        const resultados = await res.json();
        console.log(resultados)

        const estados = document.getElementById("UF")

        resultados.forEach(element => {
            const varrerListMunicipos = document.createElement("option") 
            varrerListMunicipos.value = element.UF
            UF.appendChild(varrerListMunicipos)
        });
        
    } catch (error) {
        console.log(error);
    }
}



