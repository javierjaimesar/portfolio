import imgCode from "../img/code.png";

function AcercaDe() {
  return (
    <section
      id="acercade"
      className="text-left flex flex-wrap justify-center items-center py-32 px-5"
    >
      <div className="flex flex-wrap-reverse justify-center items-center gap-10">
        <div
          className="max-w-xs lg:max-w-sm"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={imgCode} alt="coding" />
        </div>
        <div
          className="text-center lg:text-left max-w-lg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-3xl text-green-500 sm:text-4xl font-bold mb-5">
            Acerca de mí
          </h2>
          <p className="text-gray-300 text-lg">
            Estudiante de Ingeniería en Sistemas de Información con experiencia
            en liderazgo de equipos. Mi enfoque en el aprendizaje constante se
            refleja en mi compromiso, responsabilidad y apertura a diversas
            perspectivas, respaldado por mi naturaleza autodidacta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AcercaDe;
