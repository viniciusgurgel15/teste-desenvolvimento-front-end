class RepositoriosComponent {
    
    constructor() {
    }

    template(username, repositorios) {
        return new Promise((resolve, reject)=> {
            resolve(this.montarTabela(username, repositorios)),
            reject(Error("Erro interno"))
        })
    }

    montarTabela(username, repositorios) {
        let component = 
        `<nav aria-label="breadcrumb" style="margin-top: 1em;">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">/</li>
                <li class="breadcrumb-item">
                    <span onclick="rotas.homeController.buscarUsuario('${username}')" 
                        id="repositorios" class="link">Detalhes Usuário</span>
                </li>
                <li class="breadcrumb-item active" aria-current="page">/</li>
                <li class="breadcrumb-item active" aria-current="page">Repositorios</li>
            </ol>
        </nav>`
        if(repositorios && repositorios.length > 0) {
            let trs = '';
            repositorios.forEach(rep => {
                trs = trs.concat(`<tr style="cursor: pointer;" onclick="rotas.detalhesRepositorioController.buscarRepositorio('${rep.full_name}')">
                                    <th scope="row">${rep.id}</th>
                                    <td>${rep.name}</td>
                                    <td class="hideInMobile">${rep.description}</td>
                                    <td>${ComunComponent.montarRating(rep.stargazers_count)}</td>
                                </tr>`);
            })
    
               return   `${component}
                        <div class="container">
                            <table class="table">
                                <thead>
                                    <tr style="cursor: pointer">
                                        <th scope="col" onclick="rotas.repositorioController.ordenarPor('id')">#</th>
                                        <th scope="col" onclick="rotas.repositorioController.ordenarPor('name')">Nome</th>
                                        <th scope="col" class="hideInMobile" onclick="rotas.repositorioController.ordenarPor('description')">Descrição</th>
                                        <th scope="col" onclick="rotas.repositorioController.ordenarPor('stargazers_count')">Estrelas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${trs}
                                </tbody>
                            </table>
                        </div>`;
        } else {
            return `${component} <br/> Não há repositórios para apresentar`
        }
    }

}