import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function AboutUsLink() {

    return(
        <>
            <Link as={ReactLink} to='/about-us'>
                About Us
            </Link>
        </>
    )
}