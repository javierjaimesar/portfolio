

function Footer() {
    return (
        <footer id='footer' className='bg-neutral-200 py-20 px-5 text-center'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <a href="#main" className='animate-bounce'>
                    <i className='fa fa-2x fa-angle-up'></i>
                </a>
                <div className='flex gap-12 items-center'>
                    <a href='https://www.linkedin.com/in/javierjaimes/' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-linkedin text-4xl"></i>
                    </a>
                    <a href='https://github.com/javierjaimesar' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-github text-4xl"></i>
                    </a>
                </div>
                <p className='text-back'>Esteban Javier Jaimes | Desarrollador Front-End</p>
                <p>Copyright © 2024. All rights are reserved</p>
            </div>
        </footer>
    )
}

export default Footer