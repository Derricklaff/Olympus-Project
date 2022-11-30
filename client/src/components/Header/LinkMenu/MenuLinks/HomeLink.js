import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function HomeLink() {
    return(
        <>
            <Link as={ReactLink} to='/'>
                Home
            </Link>
        </>
    )
}

export default HomeLink;