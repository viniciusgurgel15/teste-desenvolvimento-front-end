class RepositoriosService {

    constructor() {}

    buscarRepositorios(username) {
        return fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
    }

    buscarRepositorio(full_name) {
        return fetch(`https://api.github.com/repos/${full_name}`)
        .then(response => response.json())
    }
}