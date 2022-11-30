import { Link } from '@chakra-ui/react';
import Auth from '../../../../utils/auth';

function LogOutLink() {
    return(
        <>
            <Link onClick={Auth.logout}>
                Logout
            </Link>
        </>
    )
}

export default LogOutLink;