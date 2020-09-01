class DetalhesRepositorioController {

    constructor(rotas, repositorioService) {
        this._repositorioService = repositorioService;
        this._detalhesRepositoriosComponent = new DetalhesRepositorioComponent();
        this._rotas = rotas;
        this._repositorio;
        this._username;
     }

    buscarRepositorio(full_name) {
        this._rotas.go(`/repositorios/${full_name}`);
    }

    montarTemplate() {
        this._detalhesRepositoriosComponent.template(this._username, this._repositorio)
        .then(template => $("#main").innerHTML = template)
    }
    
    template(full_name) {
        this._username = full_name.split("/")[0]
        this._repositorioService.buscarRepositorio(full_name)
        .then(repositorio => {
            this._repositorio = repositorio;
            this.montarTemplate();
        })
        .catch(() => this.montarTemplate());
    }

    
}