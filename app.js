function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById ("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    
console.log(campoPesquisa)
  
if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado, campo vazio!</p>"
return
}
campoPesquisa = campoPesquisa.toLowerCase ()
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase ()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
             {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
              <h3>
                <a href=${dado.link} target="_blank">${dado.titulo}</a>
              </h3>
              <p class="descricao-meta">${dado.descricao}.</p>
              <a href=${dado.link_wp} target="_blank">Mais informações</a>
              <br/>
              <a href=${dado.link_video} target="_blank">Video do Atleta </a>
              <br/>
              <iframe width="560" height="315" src="${dado.link_video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 
            </div>
          `; 
        }          
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado, refaça sua pesquisa!</p>"
    }
  
    // Atribui os resultados HTML à seção selecionada
    section.innerHTML = resultados;
  } 