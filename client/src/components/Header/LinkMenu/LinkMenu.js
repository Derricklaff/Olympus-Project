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
    IconButton
  } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

function LinkMenu() {
    return (
        <>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                bgColor='tomato'
                size='lg'
            />
            <MenuList>
                <HomeLink />
                { Auth.loggedIn() ?   <LogOutLink /> : <>  <SignInLink />   <SignUpLink />  </> } 
                <PlayGameLink />
                <AboutUsLink />
            </MenuList>
        </Menu>
        </>
    )
}

export default LinkMenu;

