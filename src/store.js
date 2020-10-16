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
    }],
    titulares: [],
    suplente: []
}

const reducerEntrenador = (state = initialState, action) => {
    return state
}

export default createStore(reducerEntrenador)