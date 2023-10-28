require('dotenv').config()
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    
    const busquedas = new Busquedas();
    let opt = '';


    do {

        opt = await inquirerMenu();

        switch(opt) {

            case 1:
            //mostrar mensaje
            const termino = await leerInput('Ciudad: ');
            
            //buscar ciudades
            const lugares = await busquedas.ciudad( termino );
            
            //seleccionar lugar
            const id = await listarLugares(lugares);
            const lugarSel = lugares.find( l => l.id === id );
            //clima

            //mostrar resultados
            console.log('\nInformacion de la ciudad\n'.green);
            console.log('Ciudad: ', lugarSel.nombre );
            console.log('Lat: ', lugarSel.lat);
            console.log('Lng: ', lugarSel.lng);
            console.log('Temperatura: ', );
            console.log('Min: ', );
            console.log('Max: ', );
            
            break;
        }

        if (opt !== 0) await pausa();


    } while (opt != 0);


} 

main();