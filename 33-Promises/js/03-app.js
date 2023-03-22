//Promise 

const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado')
    }else{
        reject('Descuento no aplicado')
    }
})

aplicarDescuento
    .then( resultado => {
        descuento(resultado)
    })
    .catch( error => {
        console.log(error)
    })


function descuento(mensaje){
    console.log(mensaje)
}

    //Hay tres valores las promises
    //fulfilled - El promise se cumplio
    //reject - El promise no se cumplio
    //pending - No se ha cumplido y tampoco se ha rechazado