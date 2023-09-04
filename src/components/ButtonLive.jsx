import { Button } from "@nextui-org/react";

function ButtonLive({ link, textButton }) {
    return (
        <Button variant="ghost" color="success" className="transition ease-in-out text-green-400 hover:border-green-500 hover:bg-green-500 duration-300">
            <a href={link} target='_blank' rel="noreferrer" className='flex items-center gap-2 text-xl py-5'>
                {textButton}
            </a>
        </Button>
    )
}

export default ButtonLive