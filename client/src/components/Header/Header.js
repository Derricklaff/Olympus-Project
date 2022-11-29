import { Heading } from '@chakra-ui/react';
import LinkMenu from './LinkMenu/LinkMenu'; 

function Header() {
    return (
        <header>
            <Heading as='h1' size='2xl' noOfLines={1}>
                Olympus Project
            </Heading>
            <div>
                <LinkMenu />
            </div>
        </header>
    )
}

export default Header;