import { Link, MenuItem } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";

function SignUpLink() {
    return(
        <>
        <Link as={ReactLink} to='/sign-up'>
            <MenuItem color='tomato' >
                Sign Up
            </MenuItem>
        </Link>
        </>
    )
}

export default SignUpLink;