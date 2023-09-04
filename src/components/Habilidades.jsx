import LiSkill from '../components/LiSkill';

import html5 from "../img/html5.svg";
import css3 from "../img/css3.svg";
import bootstrap from "../img/bootstrap.svg";
import tailwind from "../img/tailwind.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import materialui from '../img/materialui.svg'
import nodejs from "../img/nodejs.svg";
import java from "../img/java.svg";
import mysql from "../img/mysql.svg";
import git from "../img/git.svg";

function Habilidades() {
    return (
        <section id='habilidades' className='py-24 bg-neutral-950'>
            <div className='flex flex-col justify-center item-center py-5'>
                <h2 className='text-4xl text-center font-bold text-green-500   pb-10'>HABILIDADES</h2>
                <div className='flex justify-center mt-10'>
                    <ul className='flex flex-wrap justify-center items-center gap-10 max-w-2xl'>
                        <LiSkill skill={html5} direction={'left'}></LiSkill>
                        <LiSkill skill={css3} direction={'up'}></LiSkill>
                        <LiSkill skill={bootstrap} direction={'down'}></LiSkill>
                        <LiSkill skill={tailwind} direction={'right'}></LiSkill>
                        <LiSkill skill={javascript} direction={'left'}></LiSkill>
                        <LiSkill skill={react} direction={'up'}></LiSkill>
                        <LiSkill skill={materialui} direction={'down'}></LiSkill>
                        <LiSkill skill={nodejs} direction={'right'}></LiSkill>
                        <LiSkill skill={git} direction={'left'}></LiSkill>
                        <LiSkill skill={java} direction={'up'}></LiSkill>
                        <LiSkill skill={mysql} direction={'down'}></LiSkill>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Habilidades