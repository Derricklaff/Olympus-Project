import Auth from '../../utils/auth';
import SignInLink from './menuLinks/SignInLink';
import SignUpLink from './menuLinks/SignUpLink';
import PlayGameLink from './menuLinks/PlayGameLink';
import AboutUsLink from './menuLinks/AboutUsLink';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function LinkMenu() {
    return (
        <>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                { Auth.loggedIn() ? <MenuItem> <PlayGameLink /> </MenuItem> : <> <MenuItem> <SignInLink /> </MenuItem> <MenuItem> <SignUpLink /> </MenuItem> </> }
                <MenuItem>
                    <AboutUsLink />
                </MenuItem>
            </MenuList>
        </Menu>
        </>
    )
}

export default LinkMenu;

