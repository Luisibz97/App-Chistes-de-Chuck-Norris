
const jokeUrl =     'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'




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

const obetenerUsuarios = async () => {

    const resp   = await fetch( urlUsuarios );
    const { data:usuarios }   = await resp.json();
    console.log(usuarios);
    return usuarios
}



export {
    obtenerChiste,
    obetenerUsuarios
}












// fetch( jokeUrl )
// .then( resp => resp.json() )
// .then( ({ id, value }) => {
//       console.log( id, value );
// });   

// fetch( jokeUrl ).then(resp =>  {

//     resp.json().then( ({ value, id }) => {

//         console.log(id);
//         console.log(value);
//     })
// })