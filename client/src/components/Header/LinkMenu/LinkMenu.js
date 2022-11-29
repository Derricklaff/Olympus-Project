import Auth from '../../../utils/auth';
import SignInLink from './MenuLinks/SignInLink';
import SignUpLink from './MenuLinks/SignUpLink';
import PlayGameLink from './MenuLinks/PlayGameLink';
import AboutUsLink from './MenuLinks/AboutUsLink';
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

