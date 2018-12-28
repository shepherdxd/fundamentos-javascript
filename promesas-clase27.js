const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


functionpersona(id){

    returnnew Promise((resolve, reject) => {
        consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id)
            )
    })
}

functiononError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

persona(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)