class DetalhesRepositorioComponent {
    
    constructor() {
    }

    template(username, repositorio) {

        return new Promise((resolve, reject)=> {
            resolve(this.montarTemplate(username, repositorio)),
            reject(Error("Erro interno"))
        })
    }

    montarTemplate(username, repositorio) {
        let component = `<nav aria-label="breadcrumb" style="margin-top: 1em;">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">/</li>
                                <li class="breadcrumb-item">
                                    <span onclick="rotas.homeController.buscarUsuario('${username}')" 
                                        id="repositorios" class="card-link link">Detalhes Usuário</span>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">/</li>
                                <li class="breadcrumb-item">
                                    <span onclick="rotas.detalhesRepositorioController.buscarRepositorio('${username}')" 
                                        id="repositorios" class="card-link link">Repositórios</span>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">/</li>
                                <li class="breadcrumb-item active" aria-current="page">${repositorio ? repositorio.name : ''}</li>
                            </ol>
                        </nav>`
        if(repositorio) {
            return `${component} ${this.montarCard(repositorio)}`
        } else {
            return `${component} <br/> Repositório não encontrado`
        }
    }

    montarCard(repositorio) {
       return `
       <div class="container">
            <ui class="card-list card-repository">
                <ul class="card-list-item">
                    <div class="m6 s12">
                        <h5>${repositorio.name}</h5>
                        <p>${repositorio.description}</p>
                    </div>
                </ul>
                <ul class="card-list-item">
                    <div class="m2 s6">${ComunComponent.montarRating(repositorio.stargazers_count)}</div>
                </ul>
                <ul class="card-list-item">
                    Linguagem: ${repositorio.linguagem ? repositorio.linguagem : 'Não informado'}
                </ul>
                <ul class="card-list-item">
                    <a href="${repositorio.html_url}" class="card-link">Ver no GitHub</a>
                </ul>
            </ui>
        </div>`
    }

}