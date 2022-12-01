import { Link, MenuItem } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function SignInLink() {
    return(
        <>
        <Link as={ReactLink} to='/sign-in'>
            <MenuItem color='tomato'>
                Sign In
            </MenuItem>
        </Link>
        </>
    );
}

export default SignInLink;