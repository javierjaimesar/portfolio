function LiSkill({skill,direction}) {

    return (
        <li data-aos={`fade-${direction}`} data-aos-duration="1000">
            <img className='w-16' src={skill} alt={skill} />
        </li>
    )
}

export default LiSkill