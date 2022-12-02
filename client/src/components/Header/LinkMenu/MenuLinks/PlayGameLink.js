import { Link, MenuItem } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function PlayGameLink() {
    return(
        <>
        <Link fontFamily='Roboto Mono' as={ReactLink} to='/play-game'>
            <MenuItem color='tomato'>
                Start Hacking
            </MenuItem>
        </Link>
        </>
    )
}

export default PlayGameLink;