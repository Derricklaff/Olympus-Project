import { Link, MenuItem } from '@chakra-ui/react';
import Auth from '../../../../utils/auth';

function LogOutLink() {
    return(
        <>
        <Link onClick={Auth.logout}>
            <MenuItem color='tomato'>
                Logout
            </MenuItem>
        </Link>
        </>
    )
}

export default LogOutLink;