const axios = require('axios');

class Busquedas {
    historial = [];

    constructor(){
        //Leer si hay DB

    }

    get paramsMapBox(){
        return{
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar=''){
        //Peticion HTTP
        try {
            const instancia = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });

            const resp = await instancia.get();
            return resp.data.features.map(lugar=>({
                id: lugar.id,
                nombre: lugar.place_name,
                longitud: lugar.center[0],
                latitud: lugar.center[1]
            }));
            //Match de la peticion
        } catch (error) {
            console.log('No hay resultados')
            return[];
        }

       
    }
}

module.exports = Busquedas;