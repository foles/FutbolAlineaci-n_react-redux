import { createStore } from 'redux'

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Horacio Flores",
        foto: "https://avatars2.githubusercontent.com/u/62356170?s=400&u=3e178ac3ba9b6bbcd5a63fdd9361091ff75f3e88&v=4"
    },
    {
        id: 2,
        nombre: "Lionel Messi",
        foto: "https://as01.epimg.net/argentina/imagenes/2020/10/15/futbol/1602777234_178572_1602777338_noticia_normal_recorte1.jpg"
    },
    {
        id: 3,
        nombre: "Cristiano Ronaldo",
        foto: "https://www.mundodeportivo.com/r/GODO/MD/p7/Futbol/Imagenes/2020/08/09/Recortada/1dfd5d52d595407eb5466c3127aa891b-kVcC-U4827477426489dH-980x554@MundoDeportivo-Web.jpg"
    },
    {
        id: 11,
        nombre: "Horacio Flores",
        foto: "https://avatars2.githubusercontent.com/u/62356170?s=400&u=3e178ac3ba9b6bbcd5a63fdd9361091ff75f3e88&v=4"
    },
    {
        id: 21,
        nombre: "Lionel Messi",
        foto: "https://as01.epimg.net/argentina/imagenes/2020/10/15/futbol/1602777234_178572_1602777338_noticia_normal_recorte1.jpg"
    },
    {
        id: 31,
        nombre: "Cristiano Ronaldo",
        foto: "https://www.mundodeportivo.com/r/GODO/MD/p7/Futbol/Imagenes/2020/08/09/Recortada/1dfd5d52d595407eb5466c3127aa891b-kVcC-U4827477426489dH-980x554@MundoDeportivo-Web.jpg"
    },
    {
        id: 12,
        nombre: "Horacio Flores",
        foto: "https://avatars2.githubusercontent.com/u/62356170?s=400&u=3e178ac3ba9b6bbcd5a63fdd9361091ff75f3e88&v=4"
    },
    {
        id: 22,
        nombre: "Lionel Messi",
        foto: "https://as01.epimg.net/argentina/imagenes/2020/10/15/futbol/1602777234_178572_1602777338_noticia_normal_recorte1.jpg"
    },
    {
        id: 32,
        nombre: "Cristiano Ronaldo",
        foto: "https://www.mundodeportivo.com/r/GODO/MD/p7/Futbol/Imagenes/2020/08/09/Recortada/1dfd5d52d595407eb5466c3127aa891b-kVcC-U4827477426489dH-980x554@MundoDeportivo-Web.jpg"
    },
    {
        id: 13,
        nombre: "Horacio Flores",
        foto: "https://avatars2.githubusercontent.com/u/62356170?s=400&u=3e178ac3ba9b6bbcd5a63fdd9361091ff75f3e88&v=4"
    },
    {
        id: 23,
        nombre: "Lionel Messi",
        foto: "https://as01.epimg.net/argentina/imagenes/2020/10/15/futbol/1602777234_178572_1602777338_noticia_normal_recorte1.jpg"
    },
    {
        id: 33,
        nombre: "Cristiano Ronaldo",
        foto: "https://www.mundodeportivo.com/r/GODO/MD/p7/Futbol/Imagenes/2020/08/09/Recortada/1dfd5d52d595407eb5466c3127aa891b-kVcC-U4827477426489dH-980x554@MundoDeportivo-Web.jpg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    return state
}

export default createStore(reducerEntrenador)