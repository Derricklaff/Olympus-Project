import { Link, MenuItem } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function PlayGameLink() {
    return(
        <>
        <Link as={ReactLink} to='/play-game'>
            <MenuItem>
                Start Hacking
            </MenuItem>
        </Link>
        </>
    )
}

export default PlayGameLink;