import Auth from '../../../utils/auth';
import HomeLink from './MenuLinks/HomeLink';
import SignInLink from './MenuLinks/SignInLink';
import SignUpLink from './MenuLinks/SignUpLink';
import PlayGameLink from './MenuLinks/PlayGameLink';
import AboutUsLink from './MenuLinks/AboutUsLink';
import LogOutLink from './MenuLinks/LogOutLink';
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
                <MenuItem>
                    <HomeLink />
                </MenuItem>
                { Auth.loggedIn() ? <> <MenuItem> <LogOutLink /> </MenuItem> </> : <> <MenuItem> <SignInLink /> </MenuItem> <MenuItem> <SignUpLink /> </MenuItem> </> }
                <MenuItem> 
                    <PlayGameLink />
                </MenuItem>
                <MenuItem>
                    <AboutUsLink />
                </MenuItem>
            </MenuList>
        </Menu>
        </>
    )
}

export default LinkMenu;

