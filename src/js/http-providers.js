
const jokeUrl =     'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'

//Cloudinary
const cloudPreset = 'n3pz6fua';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dhkpmmtnr/upload';


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

// ArchivoSubir :: File
const subirImagen = async ( arhivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', arhivoSubir);

    try {
        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            // console.log(cloudResp);
            return cloudResp.secure_url;

        } else {
            throw await resp.json();
        }

    } catch (error) {
        
        throw error;    
    }

}



export {
    obtenerChiste,
    obetenerUsuarios,
    subirImagen
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