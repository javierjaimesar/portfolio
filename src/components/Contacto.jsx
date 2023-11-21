import ButtonLive from '../components/ButtonLive';

function Contacto() {
    return (
        <section id='contacto' className='pt-56 pb-40 bg-neutral-950'>
            <div className='flex flex-col justify-center items-center gap-14'>
                <h2 className='text-4xl text-white font-extrabold sm:text-6xl' data-aos="fade-up" data-aos-duration="1500">CONTACTO<span className='text-green-500 text-6xl sm:text-8xl'>.</span></h2>
                <p className='max-w-xs sm:max-w-lg text-xl sm:text-2xl text-gray-300 text-center'>Si te interesa mi trabajo, contáctame!</p>
                <ButtonLive link={'mailto:javierjaimesdev@gmail.com'} textButton={'Enviar Correo'} />
            </div>
        </section>
    )
}

export default Contacto