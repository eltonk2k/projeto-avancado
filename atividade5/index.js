
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
        const estados = document.getElementById("estado")
        const munis = document.getElementById("muni")
        const munic = document.getElementById("munic")
        munis.hidden = false
        let UF = estados.value
        const res = await
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`);
        const resultados = await res.json();
        console.log(resultados)

       
        resultados.forEach(element => {
            const varrerListMunicipios = document.createElement("option")
            varrerListMunicipios.innerText = element.nome
            varrerListMunicipios.value = element.id
            munic.appendChild(varrerListMunicipios)
            
        });



    } catch (error) {
        console.log(error);
    }
}



