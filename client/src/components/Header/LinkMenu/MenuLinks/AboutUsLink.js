import { Link, MenuItem } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function AboutUsLink() {
    return(
        <>
        <Link as={ReactLink} to='/about-us'>
            <MenuItem color='tomato' >
                About Us
            </MenuItem>
        </Link>
        </>
    )
}

export default AboutUsLink;