
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