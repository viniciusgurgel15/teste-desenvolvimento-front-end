class DetalhesUsuarioComponent {
    
    constructor() {
    }

    template(usuario) {
        return new Promise((resolve, reject)=> {
            resolve(this.montarTemplate(usuario)),
            reject(Error("Erro interno"))
        })
    }


    montarTemplate(usuario) { 
        let component = `<nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">/</li>
                                <li class="breadcrumb-item active" aria-current="page">Detalhes Usuário</li>
                            </ol>
                        </nav>`

        if(usuario) {
            return `
                ${component}
                <div class="container">
                    <div class="card-deck">

                        <div class="card m6 s12">
                            <div class="col">
                                <div class="m4 s12 divimagem">
                                    <img src="${ usuario.avatar_url }" id="avatar" class="imagem-avatar" alt="imagem do usuário">
                                </div>
                                <div class="m8 s12">
                                    <div class="">
                                        <h5 id="username">${ usuario.name }</h5>
                                        <h6 class="text-muted">Bio</h6>
                                        <p id="bio">${ usuario.bio ?  usuario.bio : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="card-list m6 s12">
                            <li class="card-list-item">
                                <span class="text-muted">Email: </span>
                                <span id="email">${ usuario.email ?  usuario.email : 'Não informado'}</span>
                            </li>
                            <li class="card-list-item">
                                <span class="text-muted">Número de seguidores: </span>
                                <span id="following">${ usuario.following }</span>:
                            </li>
                            <li class="card-list-item">
                                <span class="text-muted">Número de seguidos: </span>
                                <span id="followers">${ usuario.followers }</span>
                            </li>
                            <li class="card-list-item">
                                <span onclick="rotas.detalhesUsuarioController.abrirRepositorios('${ usuario.login }')" 
                                    id="repositorios" class="card-link link">Repositórios</span>
                            </li>
                        </ul>
                    </div>
                </div>
                `
        } else {
            return `${component} <br/> Usuário não encontrado`
        }
    }

}