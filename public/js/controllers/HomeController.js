class HomeController {

    constructor(rotas) {
        this._rotas = rotas;
        this._homeComponent = new HomeComponent();
    }

    submeter(e) {
        e.preventDefault();
        this.buscarUsuario($("#search").value);
    }

    buscarUsuario(username) {
        username = username ? username : $("#search").value;
        this._rotas.go(`/detalhes/${username}`);
    }

    template() {
        this._homeComponent.template().then(template => $("#main").innerHTML = template)
    }

}