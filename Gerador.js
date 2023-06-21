function gerarSenha(comprimento) {
    let caracteres = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+~|}{][\;:?<>,./-= ';
    let senha = '';
    
    for(let i =0; i < comprimento; i++){
        let randomIndex = Math.floor
        (Math.random() *caracteres.length)
        senha += caracteres
        [randomIndex]
    }
    
    return senha;
}

function gerarToken(comprimento) {
    let caracteres = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    let senha = '';
    
    for(let i =0; i < comprimento; i++){
        let randomIndex = Math.floor
        (Math.random() *caracteres.length)
        senha += caracteres
        [randomIndex]
    }
    return senha;
}

console.log(gerarToken(64))
