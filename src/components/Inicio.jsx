import cv from '../assets/CV-Esteban-Javier-Jaimes.pdf';
import imgMe from '../img/yo.jpg';
import ButtonLive from '../components/ButtonLive';

function Inicio() {
    return (
        <section id='inicio' className='h-screen flex flex-col justify-center px-5'>
            <div className='flex flex-wrap-reverse justify-center items-center gap-5'>
                <div id='main-home-text' className='text-center lg:text-left flex flex-col gap-5' data-aos="fade-right"
                    data-aos-duration="2000">
                    <h1 className="text-3xl text-green-500 sm:text-5xl font-extrabold max-w-xl">
                        Desarrollador Web Front-End
                    </h1>
                    <p className='text-gray-300 text-lg max-w-lg mx-auto lg:ms-0'>
                        ¡Hola! Soy Esteban Javier Jaimes, estudiante de Ingeniería en Sistemas de Información.</p>
                    <div className='flex flex-grow items-center gap-5 justify-center lg:justify-start'>
                        <ButtonLive link={cv} textButton={'Ver mi CV'}></ButtonLive>
                        <a href={'https://github.com/javierjaimesar'} target='_blank' rel="noreferrer" className='transition ease-in-out hover:scale-110 duration-300'>
                            <i className="fa-brands fa-github text-3xl" style={{ color: "#22c55e" }}></i>
                        </a>
                    </div>
                </div>
                <div id='main-home-img' className='max-w-xs lg:max-w-sm' data-aos="fade-left"
                    data-aos-duration="2000">
                    <img id='imgYo' src={imgMe} className='border-3 border-green-500 shadow-lg shadow-green-700 aspect-square bg-contain' alt="Esteban Javier Jaimes" />
                </div>
            </div>
        </section>
    )
}

export default Inicio