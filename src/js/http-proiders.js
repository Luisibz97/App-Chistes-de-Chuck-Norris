<<<<<<< HEAD

const jokeUrl =     'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'
=======
const jokeUrl = 'https://api.chucknorris.io/jokes/random'
>>>>>>> 1163501ac1ab60cfd4e6f1bb1e4c5c43cf7eb4e1

const obtenerChiste = async () => {

    try {
        
        const reps = await fetch( jokeUrl );
    
        if ( !reps.ok ) throw 'No se pudo realizar la petición';
    
        const { icon_url, id, value } = await reps.json()

        return { icon_url, id, value }
        
    } catch (err) {
        throw err;
    }
    
}

<<<<<<< HEAD
const obetenerUsuarios = async () => {

    const resp   = await fetch( urlUsuarios );
    const { data:usuarios }   = await resp.json();
    console.log(usuarios);
    return usuarios
}



=======
>>>>>>> 1163501ac1ab60cfd4e6f1bb1e4c5c43cf7eb4e1
export {
    obtenerChiste,
    obetenerUsuarios
}
