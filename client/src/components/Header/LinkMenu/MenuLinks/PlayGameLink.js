import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function PlayGameLink() {
    return(
        <>
            <Link as={ReactLink} to='/play-game'>
                Start Hacking
            </Link>
        </>
    )
}

export default PlayGameLink;