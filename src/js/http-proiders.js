const jokeUrl = 'https://api.chucknorris.io/jokes/random'

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

export {

    obtenerChiste
}
