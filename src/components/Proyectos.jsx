import CardProyect from '../components/CardProyect';

import listaDeTareas from '../img/listaDeTareas.png';
import buscadorDePeliculas from '../img/buscadorDePeliculas.png';
import taTeTi from '../img/tateti.png';
import personalizaTuRopa from '../img/personalizaTuRopa.png';
import aprendeLasTablas from '../img/aprendeLasTablas.png';

function Proyectos() {
    const proyectos = [
        {
          id: 0,
          title: 'Lista de Tareas',
          description: 'Página de Lista de Tareas desarrollada con HTML, CSS y JavaScript, React y estilizada con Tailwind. Ofrece opciones para agregar, editar y eliminar tareas, que se almacenan en el localStorage para persistencia.',
          linkPage: 'https://lista-de-tareas1.netlify.app/',
          linkImg: listaDeTareas,
          linkGitHub: 'https://github.com/javierjaimesar/listaDeTareas'
        },
        {
          id: 1,
          title: 'Buscador de peliculas',
          description: 'Buscador de películas en línea desarrollado con React y estilizado mediante Water.css. Conectado a una API de películas, proporciona búsqueda instantánea a medida que se escribe el término deseado.',
          linkPage: 'https://github.com/javierjaimesar/buscadorDePeliculas',
          linkImg: buscadorDePeliculas,
          linkGitHub: 'https://github.com/javierjaimesar/aprendeLasTablas'
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
          title: '"Personaliza tu ropa"',
          description: 'Desarrollado con HTML, CSS y JavaScript, presenta una gama de prendas, que incluye una remera, buzo y sudadera. Permite personalizar modificando el color, añadiendo imágenes y brinda opción de texto personalizado.',
          linkPage: 'https://personaliza-tu-ropa.netlify.app/',
          linkImg: personalizaTuRopa,
          linkGitHub: 'https://github.com/javierjaimesar/personalizaTuRopa'
        },
        {
          id: 4,
          title: '"Aprende las Tablas"',
          description: 'Página creada mediante HTML, CSS y JavaScript. Dirigida a niños para facilitar el aprendizaje de las tablas de multiplicar. Donde los niños pueden practicar y aprender, proporcionando respuestas correctas en caso de cometer errores.',
          linkPage: 'https://aprendelastablas.netlify.app/',
          linkImg: aprendeLasTablas,
          linkGitHub: 'https://github.com/javierjaimesar/aprendeLasTablas'
        }
      ]

    return (
        <section id='proyectos' className='py-24 bg-neutral-950'>
            <h3 className='text-center text-green-500 text-4xl font-bold pb-10'>PROYECTOS</h3>
            <div className='flex flex-wrap justify-center items-center gap-10 px-5 mt-10 max-w-7xl mx-auto'>
                {
                    proyectos.map((proyecto) => (
                        <CardProyect key={proyecto.id} title={proyecto.title} description={proyecto.description} linkPage={proyecto.linkPage} imgPage={proyecto.linkImg} linkGitHub={proyecto.linkGitHub} />
                    ))
                }
            </div>
        </section>
    )
}

export default Proyectos