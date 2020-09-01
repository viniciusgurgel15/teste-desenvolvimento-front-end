class DetalhesUsuarioController {

    constructor(rotas, usuarioService) {
        this._usuarioService = usuarioService;
        this._detalhesUsuarioComponent = new DetalhesUsuarioComponent();
        this._rotas = rotas;
    }

    abrirRepositorios(username) {
        this._rotas.go(`/repositorios/${username}`);
    }

    template(username) {
        this._usuarioService.buscarUsuario(username)
        .then(usuario => {
            if (usuario.location && usuario.name) {
                this._detalhesUsuarioComponent.template(usuario).then(template => $("#main").innerHTML = template)
            } else {
                if($("#mensagem").textContent) {
                    $("#mensagem").classList.remove("oculto");
                    history.replaceState({id: '/' }, 'GitHub Viewer', '/')
                } else {
                    this._rotas.go(`/`);
                }
            }
        })
    }


}