import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function SignInLink() {
    return(
        <>
            <Link as={ReactLink} to='/sign-in'>
                Sign In
            </Link>
        </>
    )
}

export default SignInLink;