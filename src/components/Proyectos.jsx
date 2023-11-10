import CardProyect from '../components/CardProyect';
import proyectos from '../logic/proyectos.js';

function Proyectos() {


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