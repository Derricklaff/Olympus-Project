import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function SignUpLink() {
    return(
        <>
            <Link as={ReactLink} to='/sign-up'>
                Sign Up
            </Link>
        </>
    )
}

export default SignUpLink;