import webPeliculas from '../img/webPeliculas.png';
import listaDeTareas from '../img/listaDeTareas.png';
import taTeTi from '../img/tateti.png';
import personalizaTuRopa from '../img/personalizaTuRopa.png';
import widgetClima from '../img/widgetClima.png';

const proyectos = [
    {
        id: 0,
        title: 'Web de peliculas',
        description: 'Web de visualización de películas que ofrece filtrado por categoría, acceso a detalles y una función de búsqueda. Desarrollada en ReactJS y se integra con una API REST personalizada construida con Node.js y MongoDB.',
        linkPage: 'https://web-peliculas-zonait.netlify.app/',
        linkImg: webPeliculas,
        linkGitHub: 'https://github.com/javierjaimesar/web-peliculas-zonait'
    },
    {
        id: 1,
        title: 'Lista de Tareas',
        description: 'Página de Lista de Tareas desarrollada con HTML, CSS y JavaScript, React y estilizada con Tailwind. Ofrece opciones para agregar, editar y eliminar tareas, que se almacenan en el localStorage para persistencia.',
        linkPage: 'https://lista-de-tareas1.netlify.app/',
        linkImg: listaDeTareas,
        linkGitHub: 'https://github.com/javierjaimesar/listaDeTareas'
    },
    {
        id: 2,
        title: 'Juego Ta-Te-Ti',
        description: 'Clásico juego Ta-Te-Ti (Tic-Tac-Toe) implementado en React y estilizado con CSS. Ofrece opción para reiniciar el juego, guarda los movimientos en el localStorage y muestra al ganador de la partida.',
        linkPage: 'https://new-tateti.netlify.app/',
        linkImg: taTeTi,
        linkGitHub: 'https://github.com/javierjaimesar/Ta-Te-Ti'
    },
    {
        id: 3,
        title: 'Widget Clima',
        description: 'Widget web creada con ReactJS que te permite consultar las condiciones climáticas de cualquier ubicación en el mundo mediante la integración del mapa de Google y la API de WeatherApi.',
        linkPage: 'https://widget-clima-dev.netlify.app/',
        linkImg: widgetClima,
        linkGitHub: 'https://github.com/javierjaimesar/Widget-Clima'
    },
    {
        id: 4,
        title: '"Personaliza tu ropa"',
        description: 'Desarrollado con HTML, CSS y JavaScript, presenta una gama de prendas, que incluye una remera, buzo y sudadera. Permite personalizar modificando el color y añadiendo imágenes.',
        linkPage: 'https://personaliza-tu-ropa.netlify.app/',
        linkImg: personalizaTuRopa,
        linkGitHub: 'https://github.com/javierjaimesar/personalizaTuRopa'
    }
]

export default proyectos;