class Rotas {
    constructor() {
        this.usuarioService = new UsuarioService();
        this._repositorioService = new RepositoriosService();

        this.homeController = new HomeController(this);
        this.detalhesUsuarioController = new DetalhesUsuarioController(this, this.usuarioService);
        this.repositorioController = new RepositorioController(this, this._repositorioService);
        this.detalhesRepositorioController = new DetalhesRepositorioController(this, this._repositorioService);
        
        this.rotear(window.location.pathname);
    }
    
    rotear(pathname) {
        if(pathname === '/') {
            this.homeController.template();
        } else if (pathname.includes('/detalhes')) {
            this.detalhesUsuarioController.template(pathname.split('/')[2])
        } else if (pathname.includes('/repositorios') && pathname.split('/').length == 3) {
            this.repositorioController.template(pathname.split('/')[2]);
        } else if (pathname.includes('/repositorios') && pathname.split('/').length == 4) {
            this.detalhesRepositorioController.template(pathname.split('/')[2]+'/'+pathname.split('/')[3]);
        } else {
            this.go('/')
        }
    }

    update() {
        this.rotear(window.location.pathname);
    }

    go(uri) {
        history.pushState( {id: uri }, 'GitHub Viewer', uri );
        this.rotear(uri);
    }

}