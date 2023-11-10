// import Atropos from 'atropos/react';

function CardProyect({ title, description, linkPage, imgPage, linkGitHub }) {
  return (
    <div
      className="text-slate-200 text-center flex flex-col flex-wrap-reverse justify-center items-center gap-4 p-4 rounded-2xl w-max hover:scale-105 transition-all border-3 shadow-lg shadow-green-500"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <div className="max-w-xs flex flex-col gap-4">
        <div>
          <h3 className="text-xl text-green-400 sm:text-2xl font-medium pb-5">
            {title}
          </h3>
          <p className="text-md">{description}</p>
        </div>
        <div className="flex gap-5 justify-center items-center transition-all">
          {/* <ButtonLive link={link} textButton={''}></ButtonLive> */}
          <a
            href={linkPage}
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out hover:scale-125 duration-300"
          >
            <i
              className="fa-solid fa-arrow-up-right-from-square text-2xl"
              style={{ color: "#22c55e" }}
            ></i>
          </a>
          <a
            href={linkGitHub}
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out hover:scale-125 duration-300"
          >
            <i
              className="fa-brands fa-github text-3xl"
              style={{ color: "#22c55e" }}
            ></i>
          </a>
        </div>
      </div>
      <div
        id="proyect"
        className="max-w-xs"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <a href={linkPage} target="_blank" rel="noreferrer">
          {/* <Atropos className="lg:my-atropos"> */}
          <img className="rounded-2xl" src={imgPage} alt="proyecto web" />
          {/* </Atropos> */}
        </a>
      </div>
    </div>
  );
}

export default CardProyect;
