const $ = (seletor) => {
    let ref = undefined;
    ref = document.querySelector(seletor);

    if(ref == undefined) {
        throw `Não foi possívelidentificar o item ${seletor} no DOM`;
    }

    return ref;
}