class RepositorioController {

    constructor(rotas, repositorioService) {
        this._repositorioService = repositorioService;
        this._repositoriosComponent = new RepositoriosComponent();
        this._rotas = rotas;
        this._username = '';
        this._repositorios = [];
        this._estaOrdenadoPor = 'stargazers_count';
     }

    buscarRepositorio(full_name) {
        this._rotas.go(`/repositorios/${full_name}`);
    }

    ordenarPor(coluna) {

        if(this._estaOrdenadoPor == coluna) {
            this._estaOrdenadoPor = 'asc'
        } else {
            this._estaOrdenadoPor = coluna
        }
        
        this._repositorios = this._repositorios.sort((a, b) => {
            if(isNaN(a[coluna]) && isNaN(b[coluna])) {
                var textA = `${a[coluna]}`.toUpperCase();
                var textB = `${b[coluna]}`.toUpperCase();
    
                if(this._estaOrdenadoPor == 'asc') {
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                } else {
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                }
            } else {
                if(this._estaOrdenadoPor == 'asc') {
                    return b[coluna]-a[coluna];
                } else {
                    return a[coluna]-b[coluna];
                }
            }
            
        });
        this.montarTemplate();
    }

    montarTemplate() {
        this._repositoriosComponent.template(this._username, this._repositorios)
        .then(template => $("#main").innerHTML = template)
    }
    
    template(username) {
        this._repositorioService.buscarRepositorios(username)
        .then(repositorios => {
            if(repositorios) {
                this._repositorios = repositorios;
                this.ordenarPor('stargazers_count');
                this._username = username;
            }
            this.montarTemplate();
        })
        .catch(() => this.montarTemplate());
    }

    
}