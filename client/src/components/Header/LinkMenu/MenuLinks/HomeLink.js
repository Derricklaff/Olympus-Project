import { Link, MenuItem } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function HomeLink() {
    return(
        <>
        <Link as={ReactLink} to='/'>
            <MenuItem>
                Home
            </MenuItem>
        </Link>
        </>
    )
}

export default HomeLink;