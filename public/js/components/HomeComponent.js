class HomeComponent {
    constructor() {}

    template() {
        return new Promise((resolve, reject)=> {
            resolve(
            ` 
                <div class="container">
                    <div class="row center">
                        <img src="static/img/image-home.svg" class="imagem">
                    </div>
                    <div class="row center" style="margin-top: 1em">
                        <div class="alert oculto" id="mensagem">Usuário não encontrado</div>
                    </div>
                    <div class="row center">
                        <form id="form" onsubmit="rotas.homeController.submeter(event)">
                            <input class="input-text" id="search" type="search" placeholder="Informe o usuário do gihub" aria-label="Pesquisar">
                            <button class="botao" type="button" onclick="rotas.homeController.buscarUsuario()">Pesquisar</button>
                        </form>
                    </div>
                </div>
            `),
            reject(Error("Erro interno"))
        })
    }

}