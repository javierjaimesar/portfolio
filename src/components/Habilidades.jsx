import LiSkill from "../components/LiSkill";
import skills from "../logic/habilidades.js";

function Habilidades() {
  return (
    <section id="habilidades" className="py-24 bg-neutral-950">
      <div className="flex flex-col justify-center item-center py-5">
        <h2 className="text-4xl text-center font-bold text-green-500   pb-10">
          HABILIDADES
        </h2>
        <div className="flex justify-center mt-10 px-5">
          <ul className="flex flex-wrap justify-center items-center gap-10 max-w-2xl">
            {skills.map((skill) => (
              <div
                key={skill.src}
                className="flex flex-col justify-center items-center"
              >
                <LiSkill skill={skill.src} direction={skill.direction} />
                <p className="text-gray-300 pt-2 font-light">{skill.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
