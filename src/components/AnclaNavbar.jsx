import { Link } from 'react-scroll';

// eslint-disable-next-line react/prop-types
function AnclaNavbar({ text,setOpen }) {
    return (
        <Link activeClass="active" to={(text.toLowerCase()).replace(/ /g, '')} spy={true} smooth={true} offset={-80} duration={500} className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 text-sm transition-all h-8 "
        onClick={() => {
            setOpen(false)
        }}
        >
            {text}
        </Link>
    )
}

export default AnclaNavbar